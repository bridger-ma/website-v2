'use server'

import { revalidatePath } from 'next/cache'

export async function subscribeToBlog(formData: FormData) {
  const email = formData.get('email')
  
  // Here you would typically handle the email subscription
  console.log('Subscribing email:', email)
  
  // Revalidate the blog page
  revalidatePath('/blog')
}