import email from "../images/icons/gmail.svg";
import whatsapp from "../images/icons/whatsapp.svg";
import facebook from "../images/icons/facebook.svg";
import insta from "../images/icons/instagram.svg";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handelSubmet = async (e) => {
    e.preventDefault();
    try {
      if (form.name == "" || form.email == "" || form.message == "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Confirm That you Fill all Fields",
        });
      } else {
        const docRef = await addDoc(collection(db, "contact"), {
          name: form.name,
          email: form.email,
          message: form.message,
          Timestamp: new Date(),
        });
        Swal.fire({
          title: "Great!",
          text: "I’ll be in touch with you soon.",
          icon: "success",
        });
        setForm({name:"",email:"",message:""})
      }
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong, please try again! ${error}`,
        });
      }
  };

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="w-[80%] mx-auto gap-0 lg:flex text-white text-center lg:text-start mt-20  h-screen justify-between items-center">
      <div data-aos="fade-right" className="flex flex-col gap-8 mb-10 lg:mb-0">
        <h1 className="text-5xl">
          Let's chat,
          <span className="block mt-3"> Tell me about your project </span>
        </h1>
        <p className="text-lg text-gray-300">
          {" "}
          Let's create something together
        </p>
        <div className="items-center gap-10 hidden lg:flex">
          <a
            href="mailto:mk4086219@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20more%20information"
            target="blank"
          >
            <img src={email} className="w-10" alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-kamal-225286255"
            target="blank"
          >
            <img src={linkedin} className="w-12 " alt="linkedin" />
          </a>
          <a href="https://wa.me/201032863899" target="blank">
            <img src={whatsapp} className="w-10" alt="whatsapp" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005537386340"
            target="blank"
          >
            <img src={facebook} className="w-10" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/mostafakamal606?igsh=MTh4cTVlaG14YXBjZg=="
            target="blank"
          >
            <img src={insta} className="w-10" alt="insta" />
          </a>
          <a href="https://github.com/mo-kamal123" target="blank">
            <img src={github} className="w-10" alt="github" />
          </a>
        </div>
      </div>
      <div className="lg:w-[40%]">
        <form
          onSubmit={handelSubmet}
          data-aos="fade-left"
          className=" flex flex-col gap-5 border-2 bg-gray-300/10 border-gray-400 rounded p-10 "
        >
          <p className="text-4xl">Keep in touch </p>
          <input
            type="text"
            value={form.name}
            onChange={handelChange}
            name="name"
            placeholder="FullName"
            className="px-2 py-2 outline-none rounded !text-black border-2 focus:border-blue-700 transition-all duration-300 w-full"
          />
          <input
            type="email"
            value={form.email}
            onChange={handelChange}
            name="email"
            placeholder="Your Email"
            className="px-2 py-2 outline-none rounded !text-black border-2 focus:border-blue-700 transition-all duration-300 w-full"
          />
          <div>
            <p className="text-xl mb-3">Tell me more about your project :</p>
            <textarea
              type="text"
              value={form.message}
              onChange={handelChange}
              name="message"
              placeholder="type details ..."
              className="max-h-36 px-2 py-2 outline-none rounded !text-black border-2 focus:border-blue-700 transition-all duration-300 w-full"
            />
          </div>
          <button className="bg-blue-500 px-3 py-2 rounded w-fit mx-auto">
            Send Message
          </button>
        </form>
        <div className="flex items-center gap-5 my-10 lg:hidden">
          <a
            href="mailto:mk4086219@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20more%20information"
            target="blank"
          >
            <img src={email} className="w-10" alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-kamal-225286255"
            target="blank"
          >
            <img src={linkedin} className="w-12 " alt="linkedin" />
          </a>
          <a href="https://wa.me/201032863899" target="blank">
            <img src={whatsapp} className="w-10" alt="whatsapp" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005537386340"
            target="blank"
          >
            <img src={facebook} className="w-10" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/mostafakamal606?igsh=MTh4cTVlaG14YXBjZg=="
            target="blank"
          >
            <img src={insta} className="w-10" alt="insta" />
          </a>
          <a href="https://github.com/mo-kamal123" target="blank">
            <img src={github} className="w-10" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
