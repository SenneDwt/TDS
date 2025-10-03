// TypeScript interfaces
interface ContactFormData {
    naam: string;
    email: string;
    telefoon?: string;
    onderwerp: string;
    bericht: string;
}

interface FormValidationResult {
    isValid: boolean;
    errors: string[];
}

// Mobile menu functionality
class MobileMenu {
    private mobileMenuToggle: HTMLElement | null;
    private nav: HTMLElement | null;

    constructor() {
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        this.nav = document.querySelector('.nav');
        this.init();
    }

    private init(): void {
        if (this.mobileMenuToggle && this.nav) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
    }

    private toggleMenu(): void {
        if (this.nav && this.mobileMenuToggle) {
            this.nav.classList.toggle('active');
            this.mobileMenuToggle.classList.toggle('active');
        }
    }
}

// Form validation class
class FormValidator {
    static validateContactForm(formData: ContactFormData): FormValidationResult {
        const errors: string[] = [];

        if (!formData.naam.trim()) {
            errors.push('Naam is verplicht');
        }

        if (!formData.email.trim()) {
            errors.push('Email is verplicht');
        } else if (!this.isValidEmail(formData.email)) {
            errors.push('Ongeldig email adres');
        }

        if (!formData.onderwerp.trim()) {
            errors.push('Onderwerp is verplicht');
        }

        if (!formData.bericht.trim()) {
            errors.push('Bericht is verplicht');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    private static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Contact form handler
class ContactFormHandler {
    private form: HTMLFormElement | null;

    constructor() {
        this.form = document.getElementById('contact-form') as HTMLFormElement;
        this.init();
    }

    private init(): void {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }

    private handleSubmit(): void {
        if (!this.form) return;

        const formData: ContactFormData = {
            naam: (this.form.querySelector('#naam') as HTMLInputElement)?.value || '',
            email: (this.form.querySelector('#email') as HTMLInputElement)?.value || '',
            telefoon: (this.form.querySelector('#telefoon') as HTMLInputElement)?.value || '',
            onderwerp: (this.form.querySelector('#onderwerp') as HTMLSelectElement)?.value || '',
            bericht: (this.form.querySelector('#bericht') as HTMLTextAreaElement)?.value || ''
        };

        const validation = FormValidator.validateContactForm(formData);

        if (validation.isValid) {
            this.submitForm(formData);
        } else {
            this.showErrors(validation.errors);
        }
    }

    private submitForm(formData: ContactFormData): void {
        // In a real application, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        this.showSuccessMessage();
        
        // Reset form
        this.form?.reset();
    }

    private showErrors(errors: string[]): void {
        // Remove existing error messages
        const existingErrors = document.querySelectorAll('.error-message');
        existingErrors.forEach(error => error.remove());

        // Show new error messages
        errors.forEach(error => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#ef4444';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
            errorDiv.textContent = error;
            
            this.form?.appendChild(errorDiv);
        });
    }

    private showSuccessMessage(): void {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.color = '#10b981';
        successDiv.style.fontSize = '0.875rem';
        successDiv.style.marginTop = '0.5rem';
        successDiv.style.padding = '0.75rem';
        successDiv.style.backgroundColor = '#d1fae5';
        successDiv.style.borderRadius = '0.375rem';
        successDiv.textContent = 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.';
        
        this.form?.appendChild(successDiv);
    }
}

// Smooth scrolling utility
class SmoothScroller {
    constructor() {
        this.init();
    }

    private init(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href') || '');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Utility class for common functionality
class Utils {
    static setCurrentYear(): void {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }

    static highlightActiveNavItem(): void {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-list a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Main application class
class App {
    constructor() {
        this.init();
    }

    private init(): void {
        // Initialize all components
        new MobileMenu();
        new ContactFormHandler();
        new SmoothScroller();
        
        // Initialize utilities
        Utils.setCurrentYear();
        Utils.highlightActiveNavItem();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
