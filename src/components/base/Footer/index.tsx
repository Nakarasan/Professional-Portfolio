import mobile from "../../../assets/images/footer/mobile.svg";
import email from "../../../assets/images/footer/email.svg";
import address from "../../../assets/images/footer/address.svg";
import curveline from "../../../assets/images/footer/curveline.svg";

export default function Footer() {
  return (
    <div className="flex justify-between py-14">
      <div className="space-y-6">
        <div className="font-poppinsMedium text-2xl">Get in Touch</div>
        <div>For business and partnership inquiry please contact me below!</div>
        <div className="flex items-center gap-5">
          <img src={mobile} alt="mobile" />
          <div>
            <div className="text-white/60">Phone</div>
            <div>+94765705081</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={email} alt="mobile" />
          <div>
            <div className="text-white/60">Email</div>
            <div>krishzkara27@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={address} alt="mobile" />
          <div>
            <div className="text-white/60">Address</div>
            <div>Vaththanai, Puloly West, Point Pedro.</div>
          </div>
        </div>
      </div>
      <div>
        <img src={curveline} alt="curveline" />
      </div>
    </div>
  );
}
