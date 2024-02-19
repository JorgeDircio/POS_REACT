export interface SidebarProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContainerProps {
  $isopen: string;
}