import Navbar from "../components/layout/Navbar";
import BillingForm from "../components/layout/BillingForm";
import OrderSummary from "../components/layout/OrderSummary";
import WalletCouponSection from "../components/layout/WalletCouponSection";

const BillingPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Navbar />

      <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-4">
          {/* Left */}
          <BillingForm />

          {/* Right */}
          <div className="space-y-5">
            <OrderSummary />
            <WalletCouponSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
