"use client"
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader';
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import { useRouter } from "next/navigation"

const KycPage = () => {
  const [step, setStep] = useState(1);
  const [document, setDocument] = useState(null);
  const [ssn, setSsn] = useState('');
  const [docError, setDocError] = useState('');
  const [ssnError, setSsnError] = useState('');
  const router = useRouter()

  const handleDocumentUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      // Check if the file type is PDF
      if (fileType === 'application/pdf') {
        setDocument(file);
        setDocError('');
      } else {
        setDocument(null);
        setDocError('Please upload a PDF document only.');
      }
    } else {
      setDocument(null);
      setDocError('Please upload your identification document.');
    }
  };

  const handleSubmitDocument = () => {
    if (!document) {
        setDocError('Please upload your identification document.');
        return;
    }
    if (document && document.type !== 'application/pdf') {
        setDocError('Please upload a PDF document only.');
        return;
      }
    // Logic to upload document
    setStep(2);
  };

  const handleSsnChange = (event: any) => {
    setSsn(event.target.value);
    setSsnError('');
  };

  const handleSubmitSsn = () => {
    if (!ssn) {
        setSsnError('Please enter your Social Security Number (SSN).');
        return;
    } else {
        router.push('/dashboard')
    }
    // Logic to submit SSN
  };

  return (
    <div className={
        cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border className={
            cn('flex flex-col p-8 w-full lg:w-2/5')
        }>
            <>
                <LoginHeader className="my-4"></LoginHeader>
                <br/>
                <div className="text-center text-sm">
                    <b className='text-xl'> Complete Your KYC Process </b><br/>
                    <> To ensure the security of your account and comply with regulatory requirements, we need to verify your identity. Please follow the steps below to complete the KYC process. </>
                </div>
                <br/>
                <br/>
                <div className="flex items-center mb-6">
                    <div className={`flex-1 text-center py-2 font-bold ${step === 1 ? 'text-blue-500 border-b-2 border-blue-300' : 'text-gray-500'}`}>
                        Step 1: Upload Document
                    </div>
                    <div className={`flex-1 text-center py-2 font-bold ${step === 2 ? 'text-blue-500 border-b-2 border-blue-300' : 'text-gray-500'}`}>
                        Step 2: Enter SSN
                    </div>
                </div>
                {step === 1 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Upload Your ID Document</h2>
                    <p className="mb-4">
                        Please upload a clear photo or scan of a government-issued ID (e.g., passport, driver's license, or national ID card). This will help us verify your identity.
                    </p>
                    <br/>
                    <input type="file" onChange={handleDocumentUpload} className="mb-4 text-center" />
                    {docError && <p className="text-red-500 mb-4">{docError}</p>}
                    <br/>
                    <br/>
                    <Button onClick={handleSubmitDocument} className="w-full">
                        Submit ID Document
                    </Button>
                </div>
                )}
                {step === 2 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Enter Your Social Security Number (SSN)</h2>
                    <p className="mb-4">
                        Provide your Social Security Number (SSN) to complete the identity verification process. Your SSN will be securely processed and will help us confirm your identity.
                    </p>
                    <Label htmlFor="ssn" className="block mb-2">
                        SSN
                    </Label>
                    <Input type="text" id="ssn" value={ssn} onChange={handleSsnChange} className="mb-4" />
                    {ssnError && <p className="text-red-500 mb-4">{ssnError}</p>}
                    <Button onClick={handleSubmitSsn} className="w-full">
                        Submit SSN
                    </Button>
                </div>
                )}
            </>
        </Border>
    </div>
  );
};

export default KycPage;
