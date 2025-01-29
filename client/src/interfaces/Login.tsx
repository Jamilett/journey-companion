export interface LoginProps {
  onLogin: () => void;
}

export interface LogoutProps {
  onLogout: () => void;
}

export interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error?: string;
}