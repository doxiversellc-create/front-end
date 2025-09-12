// Define the specific types for the Google Identity Services library
interface CredentialResponse {
  credential?: string;
  select_by?: string;
}

interface IdConfiguration {
  client_id: string;
  callback: (_response: CredentialResponse) => void;
  // Add other potential properties for better type safety
  auto_select?: boolean;
  login_uri?: string;
}

interface RenderButtonConfig {
  type: "standard" | "icon";
  theme: "outline" | "filled_blue" | "filled_black";
  size: "large" | "medium" | "small";
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  shape?: "rectangular" | "pill" | "circle" | "square";
  logo_alignment?: "left" | "center";
  width?: string;
}

interface GoogleAccounts {
  accounts: {
    id: {
      initialize: (_config: IdConfiguration) => void;
      renderButton: (_parent: HTMLElement, _config: RenderButtonConfig) => void;
      prompt: (_callback?: (_notification: unknown) => void) => void;
      // Add other methods if you use them
    };
  };
}

declare global {
  interface Window {
    google?: GoogleAccounts; // Make it optional to handle loading state
  }
}

// This export is needed to make the file a module
export type { CredentialResponse, RenderButtonConfig };
