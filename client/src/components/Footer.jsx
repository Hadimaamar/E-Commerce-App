import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col p-5  ">
        <h1 className="text-5xl font-bold">Asmo.</h1>
        <p className="my-5">
          Our company aims to bring you the best brands and fashion clothes on a
          easy, searchable, offerdable way
        </p>
        <div className="flex ">
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center bg-[#3b5999] mr-5">
            <Facebook />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center bg-[#e4405f] mr-5">
            <Instagram />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center bg-[#55acee] mr-5">
            <Twitter />
          </div>
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center bg-[#e60023] mr-5">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="hidden flex-1 p-5 md:inline-block">
        <h3 className="mb-8 text-xl font-extrabold ">Useful Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap ">
          <li className="footerListItem">Home</li>
          <li className="footerListItem">Cart</li>
          <li className="footerListItem">Man Fashion</li>
          <li className="footerListItem">Woman Fashion</li>
          <li className="footerListItem">Accessories</li>
          <li className="footerListItem">My Account</li>
          <li className="footerListItem">Order Tracking</li>
          <li className="footerListItem">Wishlist</li>
          <li className="footerListItem">Terms</li>
        </ul>
      </div>
      <div className="bg-[#eee] md:bg-white flex-1 p-5 ">
        <h3 className="mb-8 text-xl font-extrabold ">Contact</h3>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, South
          Tobinchester 98336
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} /> +961 76 641 507
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} /> contact@asmo.dev
        </div>
        <img className="w-[50%]" src="/assets/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
