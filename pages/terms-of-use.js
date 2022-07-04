/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { useState } from 'react'

export default function TermsOfUse() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if (isChecked) {
      alert('✅ Thanks for agreeing, enjoy your stay here');
    } else {
      alert('⛔️ Checkbox is NOT checked');
    }
  }

  return <>
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </nav>
    <p>I'm learning Next.js now
      Are you agree with that?
    </p>
    <form onSubmit={handleSubmit}>
      <input 
        name="acceptTerms" 
        type="checkbox" 
        id="acceptTerms"
        onChange={handleChange}
        />
      <label 
        htmlFor="acceptTerms" 
      >
        Accept Terms & Conditions
      </label>
      <button type="submit">Ok</button>
    </form>
  </>
}