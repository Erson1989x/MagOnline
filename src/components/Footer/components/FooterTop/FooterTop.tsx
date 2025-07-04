
import { CompanyInfo } from "../CompanyInfo/CompanyInfo";
import { FooterLinks } from "../FooterLinks/FooterLinks";
import { SocialMedia } from "../SocialMedia/SocialMedia";


export const FooterTop = () => {
  return (
    <div className="container mx-auto px-4 py-3">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Company info and branding */}
        <div className="md:col-span-4">
          <CompanyInfo />
        </div>

        {/* Quick links with better spacing and hover effects */}
        <div className="md:col-span-5">
          <FooterLinks />
        </div>

        {/* Social media - enhanced */}
        <div className="md:col-span-3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};