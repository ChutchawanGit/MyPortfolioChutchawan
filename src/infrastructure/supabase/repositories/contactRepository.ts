import { ContactMessage } from '../../../core/entities';
import { ContactRepository } from '../../../core/repositories';
import supabaseClient from '../client';

export class SupabaseContactRepository implements ContactRepository {
  async send(message: Omit<ContactMessage, 'id' | 'read' | 'createdAt'>): Promise<ContactMessage> {
    const { data, error } = await supabaseClient
      .from('messages')
      .insert({
        name: message.name,
        email: message.email,
        message: message.message,
        read: false
      })
      .select()
      .single();

    if (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message');
    }

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      message: data.message,
      read: data.read,
      createdAt: new Date(data.created_at)
    };
  }

  async getAll(): Promise<ContactMessage[]> {
    const { data, error } = await supabaseClient
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
      throw new Error('Failed to fetch messages');
    }

    return data.map(item => ({
      id: item.id,
      name: item.name,
      email: item.email,
      message: item.message,
      read: item.read,
      createdAt: new Date(item.created_at)
    }));
  }

  async markAsRead(id: string): Promise<boolean> {
    const { error } = await supabaseClient
      .from('messages')
      .update({ read: true })
      .eq('id', id);

    if (error) {
      console.error(`Error marking message ${id} as read:`, error);
      return false;
    }

    return true;
  }

  async delete(id: string): Promise<boolean> {
    const { error } = await supabaseClient
      .from('messages')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(`Error deleting message ${id}:`, error);
      return false;
    }

    return true;
  }
}

// Export a singleton instance
export const contactRepository = new SupabaseContactRepository();