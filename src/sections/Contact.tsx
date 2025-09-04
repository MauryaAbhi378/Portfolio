"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import grainImage from "@/assets/images/grain.jpg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<"success" | "danger">("success");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type: "success" | "danger", message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE!,
        process.env.NEXT_PUBLIC_TEMPLATE!,
        {
          from_name: formData.name,
          to_name: "Abhishek",
          from_email: formData.email,
          to_email: "abhim0505@gmail.com",
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing mt-20 mb-10 sm:mx-4">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-gray-900 lg:max-w-xl lg:m-auto lg:mt-20">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">{`Let's Talk`}</h2>
          <p className="font-normal text-neutral-400">
            {`Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help`}
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-neutral-300"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender"
              placeholder="Share your thoughts..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial bg-purple-600 hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
