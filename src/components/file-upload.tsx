import { useRef, useState, useEffect } from "react";
import { ImagePlus, X } from "lucide-react";

type FileUploadProps = {
  label: string;
  onChange: (file: File | null) => void;
  value: File | null | undefined;
};

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleClick = () => inputRef.current?.click();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.files?.[0] || null);

  const handleRemove = () => {
    onChange(null);
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="relative aspect-square border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden">
      {preview ? (
        <div className="relative w-28 h-28 ">
          <img
            src={preview}
            alt={label}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
            aria-label="Remove image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="text-center" onClick={handleClick}>
          <ImagePlus className="mx-auto h-8 w-8 text-gray-400" />
          <span className="mt-2 block text-sm text-gray-600">{label}</span>
          <span className="text-xs text-gray-400">(Ratio 1:1)</span>
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

export default FileUpload;
