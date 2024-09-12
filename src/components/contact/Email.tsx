"use client"

import { ChangeEvent, useRef, useState } from "react"
import { Button } from "../ui/button"
import emailjs from '@emailjs/browser'

const Email = () => {
  const formRef = useRef(null)

  const [loading, setLoading] = useState(false)
  
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_6l2pxnm', 
        'template_44vutnb',
        {
          from_name: form.name,
          to_name: 'YiShen',
          from_email: form.email,
          to_email: 'halu0614@gmail.com',
          message: form.message,
        },
        'Y1G8liHbY8jCGxk4E'
      )

      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: '',
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col max-w-xl w-full border p-5 rounded-xl bg-white/55 backdrop-blur-lg transition-all">
      <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="flex flex-col space-y-5 w-full"
      >
        <label className="flex flex-col">
          <span className="font-bold">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 rounded-md border focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-bold">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 rounded-md border focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-bold">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Say something to me"
            className="w-full px-3 py-1 rounded-md border focus:outline-none placeholder:font-light text-sm"
          />
        </label>

        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

export default Email
