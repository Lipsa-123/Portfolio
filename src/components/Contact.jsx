import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">RegNo : {CONTACT.RegNo}</p>
        <p className="my-4">Department : {CONTACT.Department}</p>
        <p className="my-4">Specialization : {CONTACT.Specialization}</p>
        <a href="#">Email : {CONTACT.email}</a>
        <p className="my-4">PhoneNo : {CONTACT.phoneNo}</p>
        <p className="my-4">Address : {CONTACT.address}</p>
      </div>
    </div>
  );
};

export default Contact;
