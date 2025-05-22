"use client";
import {
  getPersonalizationData,
  hasPersonalizationData,
  storePersonalizationData,
} from "app/utils/personalization";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface PersonalizationProps {
  productId?: string;
}

const Personalization = ({ productId = "default" }: PersonalizationProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Check for existing personalization data on component mount
  useEffect(() => {
    const loadPersonalizationData = async () => {
      try {
        const hasData = await hasPersonalizationData(productId);
        if (hasData) {
          const data = await getPersonalizationData(productId);
          if (data) {
            setSelectedImage(data.previewUrl || null);
            setLogoName(data.logoName);
            setLogoFile(data.logoFile);
          }
        }
      } catch (err) {
        console.error("Error loading personalization data:", err);
      }
    };

    loadPersonalizationData();
  }, [productId]);

  const processFile = async (file: File) => {
    setError(null);

    // Check file type
    const validTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "application/postscript",
    ];
    if (!validTypes.includes(file.type)) {
      setError(
        "Invalid file format. Please upload PNG, JPG, or EPS files only."
      );
      return;
    }

    // Check file size (3MB = 3 * 1024 * 1024 bytes)
    if (file.size > 3 * 1024 * 1024) {
      setError("File size exceeds 3MB limit. Please upload a smaller file.");
      return;
    }

    // Create object URL for preview
    const objectUrl = URL.createObjectURL(file);
    setSelectedImage(objectUrl);
    setLogoFile(file);

    // Store in IndexedDB
    try {
      // Store the data using our utility function
      await storePersonalizationData(productId, file, logoName);
    } catch (err) {
      console.error("Error storing personalization data:", err);
      setError("Error storing your logo. Please try again.");
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Handle drag events
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file) {
        processFile(file);
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="p-8 flex flex-col gap-8 border border-primary-700 rounded-4xl">
      <div className="flex flex-col gap-3">
        <span className="text-heading-2-bold">Personalize your identity</span>
        <span className="text-body-2-regular">
          Personalize every detail to match the elegance and essence of your
          brand.
        </span>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept=".png,.jpg,.jpeg,.eps"
          className="hidden"
        />

        {/* Image Preview */}
        {selectedImage && (
          <div className="flex flex-col relative h-[243px] items-center justify-center gap-6 p-6 bg-[#292929]/40 rounded-[32px]">
            <img
              src={selectedImage}
              alt="Uploaded logo"
              className="max-h-40 object-contain rounded-xl"
            />
            <div
              onClick={triggerFileInput}
              className="flex items-center cursor-pointer py-2 px-4 pr-2 gap-4 border border-white rounded-full bg-white/5 absolute bottom-5 right-5 backdrop-blur-lg"
            >
              Replace Image
              <div className="size-8 flex items-center justify-center bg-white rounded-full aspect-square">
                <img
                  src="/products/add-logo.svg"
                  className="size-4 aspect-square"
                />
              </div>
            </div>
          </div>
        )}

        {/* Upload Container */}
        {!selectedImage && (
          <div
            ref={dropAreaRef}
            onClick={triggerFileInput}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col h-[243px] cursor-pointer items-center justify-center gap-6 p-6 ${isDragging ? "bg-[#292929ff] border-white" : "bg-[#29292966] hover:bg-[#292929ff] border-gray-700"} rounded-[32px] border border-dashed transition-all duration-200`}
          >
            <div className="inline-flex gap-2.5 p-4 bg-gray-50 rounded-[100px] shadow-[inset_0px_-2px_3px_#ffffff6e,0px_2px_12px_#ffffff33] items-center">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <img
                  src="/products/add-logo.svg"
                  className="size-8 aspect-square"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 self-stretch w-full items-center p-0">
              <div className="inline-flex items-center gap-2 rounded-[100px]">
                <span className="text-body-1-medium text-textwhite tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)]">
                  Click to Upload
                </span>

                <span className="text-body-1-regular text-text-tertiary tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)]">
                  or drag and drop
                </span>
              </div>

              <p className="text-caption-1-regular text-text-tertiary text-center tracking-[var(--caption-1-regular-letter-spacing)] leading-[var(--caption-1-regular-line-height)]">
                PNG, JPG, EPS with Max. 3MB <br />
                Recommendation 3000 x 4000 px
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>

      <div className="flex flex-col gap-2.5">
        <span className="text-body-1-regular">
          Logo Name
          <span className="text-red-500">*</span>
        </span>
        <input
          onChange={(e) => setLogoName(e.target.value)}
          value={logoName}
          type="text"
          className="border border-primary-700 py-4 px-6 rounded-2xl text-body-1-medium"
          placeholder="Enter your logo name"
        />
      </div>

      <div className="flex gap-2.5 *:w-full">
        <button
          onClick={() => router.back()}
          className="p-4 text-white border border-primary-700 rounded-full text-body-1-bold flex items-center justify-center gap-4 cursor-pointer"
        >
          Cancel
        </button>
        <button
          disabled={logoName?.trim() === "" || !logoFile}
          className="p-4 bg-white disabled:opacity-50 shadow-[inset_0px_-4px_1px_0px_rgba(13,13,13,0.22)] outline-[0.50px] outline-offset-[-0.50px] outline-zinc-800 rounded-full text-black text-body-1-bold flex items-center justify-center gap-4 cursor-pointer"
          onClick={async () => {
            if (logoFile && logoName.trim() !== "") {
              // Save final version with updated logo name
              await storePersonalizationData(productId, logoFile, logoName);
              console.log(
                `Personalization data stored for product: ${productId}`
              );
              // Here you would typically navigate to cart or next step
              router.push(`/product/${productId}`);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Personalization;
