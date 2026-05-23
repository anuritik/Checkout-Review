import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import Button from "../common/Button";
import { ArrowLeft } from "lucide-react";

const BillingForm = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8ECF4]">
      <button className="text-sm text-[#6B7280] mb-6 flex">
        <ArrowLeft size={18} className="mx-1" /> Back to plans
      </button>

      <h1 className="text-[32px] leading-[40px] font-bold text-[#111827]">
        Review your details
      </h1>

      <p className="mt-8 text-[18px] font-semibold text-[#1F2937]">
        Billing Information
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <InputField label="Company Name" placeholder="abjiyan" />

        <InputField label="Email" placeholder="abhigyan.pandey@getreelax.com" />

        <InputField label="GST Number (Optional)" placeholder="GST Number" />

        <InputField label="PAN Number (Optional)" placeholder="PAN Number" />

        <InputField label="Premise/House no." placeholder="Premise/House no." />

        <InputField label="Street" placeholder="Street" />

        <SelectField label="State" />

        <SelectField label="City" />

        <InputField label="Country" placeholder="India" />

        <InputField label="Pin Code" placeholder="Pincode" />
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <Button variant="secondary">Cancel</Button>

        <Button variant="primary">Save Details</Button>
      </div>
    </div>
  );
};

export default BillingForm;
