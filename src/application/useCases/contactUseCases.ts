import { ContactMessage } from '../../core/entities';
import { ContactRepository } from '../../core/repositories';

export class ContactUseCases {
  private contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async sendMessage(name: string, email: string, message: string): Promise<ContactMessage> {
    // Validate inputs
    if (!name.trim()) {
      throw new Error('Name is required');
    }
    
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    
    if (!message.trim()) {
      throw new Error('Message is required');
    }

    // Send message
    return this.contactRepository.send({ name, email, message });
  }

  async getAllMessages(): Promise<ContactMessage[]> {
    return this.contactRepository.getAll();
  }

  async markMessageAsRead(id: string): Promise<boolean> {
    return this.contactRepository.markAsRead(id);
  }

  async deleteMessage(id: string): Promise<boolean> {
    return this.contactRepository.delete(id);
  }

  // Helper methods
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}