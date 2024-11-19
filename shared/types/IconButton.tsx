export interface IconButtonProps {
    icon: React.ReactNode;
    size?: number;
    filled?: boolean;
    badge?: number | string | undefined;
    badgeSize?: number;
    showBadge?: boolean;
    badgeStyle?: object;
    backgroundColor?: string;
    iconColor?: string;
  }