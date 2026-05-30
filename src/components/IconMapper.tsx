/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Monitor,
  Database,
  Network,
  Lock,
  Eye,
  RefreshCw,
  Wrench,
  HardDrive,
  Volume2,
  ShieldAlert,
  Lightbulb,
  Users,
  Award,
  Cpu,
  Boxes,
  Building,
  GraduationCap,
  Zap,
  Briefcase,
  FlaskConical,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Check,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Info,
  Calendar,
  Building2,
  ExternalLink,
  FileText,
  Sliders,
  ClipboardCheck,
  Clock,
  Sparkles,
  Download
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Database,
  Network,
  Lock,
  Eye,
  RefreshCw,
  Wrench,
  HardDrive,
  Volume2,
  ShieldAlert,
  Lightbulb,
  Users,
  Award,
  Cpu,
  Boxes,
  Building,
  GraduationCap,
  Zap,
  Briefcase,
  FlaskConical,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Check,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Info,
  Calendar,
  Building2,
  ExternalLink,
  FileText,
  Sliders,
  ClipboardCheck,
  Clock,
  Sparkles,
  Download
};

interface IconMapperProps {
  name: string;
  className?: string;
}

export const IconMapper: React.FC<IconMapperProps> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback if icon not found
    return <Info className={className} />;
  }
  return <IconComponent className={className} />;
};
