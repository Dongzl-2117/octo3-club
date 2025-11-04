import { 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Image, 
  Video, 
  Globe, 
  File,
  Download
} from "lucide-react";
import type { FileType } from "../types";

export function getFileIcon(fileType: FileType, size: number = 20) {
  switch (fileType) {
    case "pdf":
      return <FileText size={size} className="text-red-600" />;
    case "doc":
    case "docx":
      return <FileText size={size} className="text-blue-600" />;
    case "ppt":
    case "pptx":
      return <Presentation size={size} className="text-orange-600" />;
    case "xls":
    case "xlsx":
      return <FileSpreadsheet size={size} className="text-green-600" />;
    case "image":
      return <Image size={size} className="text-purple-600" />;
    case "video":
      return <Video size={size} className="text-pink-600" />;
    case "web":
      return <Globe size={size} className="text-blue-500" />;
    default:
      return <File size={size} className="text-gray-600" />;
  }
}

export function getFileColor(fileType: FileType): { bg: string; text: string; border: string } {
  switch (fileType) {
    case "pdf":
      return { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" };
    case "doc":
    case "docx":
      return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" };
    case "ppt":
    case "pptx":
      return { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" };
    case "xls":
    case "xlsx":
      return { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" };
    case "image":
      return { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" };
    case "video":
      return { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" };
    case "web":
      return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" };
    default:
      return { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
  }
}

export function getFileTypeName(fileType: FileType): string {
  switch (fileType) {
    case "pdf":
      return "PDF";
    case "doc":
    case "docx":
      return "Word";
    case "ppt":
    case "pptx":
      return "PPT";
    case "xls":
    case "xlsx":
      return "Excel";
    case "image":
      return "Image";
    case "video":
      return "Video";
    case "web":
      return "Web";
    default:
      return "File";
  }
}

export const FileIcon = Download;

