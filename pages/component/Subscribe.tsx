import { useEffect, useState } from "react";
import axios from "axios";

export default function Subscribe({imageUrl}: {imageUrl: any}) {
  const [formData, setFormData] = useState({
    email: '',
  })
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
    setIsValidEmail(null);
  };

  const validateEmail = (email:string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(validateEmail(formData.email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }

  return (
    <div className="sub">
      <div className="img">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <h3>Sed ut perspiciatis unde omnis</h3>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
      </p>
      <div className="solid"></div>
      <span>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
      </span>
      <div className="email">
        <b>Subscribe to our newsletter</b>
        <form onSubmit={handleSubmit} noValidate>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={isValidEmail === false ? 'red' : isValidEmail === true ? 'green' : ''}
          />
          <button 
            type="submit"
            disabled={isValidEmail === false ? true : isValidEmail === true ? false : false}
          >
            <img src="/img/icon.png" alt="" />
          </button>
          {isValidEmail === false && (
            <span>
              Please enter a valid email!
            </span>
          )}
        </form>
      </div>
    </div>
  )
}