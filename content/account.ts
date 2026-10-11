// Generated from the original site content. Edit freely; wording and images match the original.
import type { AccountPage } from './types';

export const accountPages = {
  "login": {
    "title": "Account sign in",
    "message": "Sign in to your account to access your profile, history, and any private pages you've been granted access to.",
    "fields": [
      {
        "label": "Email",
        "name": "email",
        "type": "email",
        "autoComplete": "email",
        "required": true
      },
      {
        "label": "Password",
        "name": "password",
        "type": "password",
        "autoComplete": "current-password",
        "required": true
      }
    ],
    "submit": "Sign in",
    "links": [
      {
        "label": "Reset password",
        "href": "/m/reset"
      }
    ],
    "note": {
      "text": "Not a member?",
      "link": {
        "label": "Create account.",
        "href": "/m/create-account"
      }
    }
  },
  "reset": {
    "title": "Reset password",
    "message": "Reset your password for .",
    "fields": [
      {
        "label": "Password",
        "name": "password",
        "type": "password",
        "autoComplete": "new-password",
        "required": true
      },
      {
        "label": "Confirm password",
        "name": "confirmPassword",
        "type": "password",
        "autoComplete": "new-password",
        "required": true
      }
    ],
    "submit": "Set password",
    "links": []
  },
  "create": {
    "title": "Set Password",
    "message": "You're signing in for the first time as , so you need to set a password.",
    "fields": [
      {
        "label": "Password",
        "name": "password",
        "type": "password",
        "autoComplete": "new-password",
        "required": true
      },
      {
        "label": "Confirm password",
        "name": "confirmPassword",
        "type": "password",
        "autoComplete": "new-password",
        "required": true
      }
    ],
    "submit": "Set Password",
    "links": []
  },
  "create-account": {
    "title": "Create Account",
    "message": "By creating an account, you may receive newsletters or promotions.",
    "fields": [
      {
        "label": "First name",
        "name": "firstName",
        "type": "text",
        "autoComplete": "given-name",
        "required": true
      },
      {
        "label": "Last name",
        "name": "lastName",
        "type": "text",
        "autoComplete": "family-name",
        "required": true
      },
      {
        "label": "Email",
        "name": "email",
        "type": "email",
        "autoComplete": "email",
        "required": true
      },
      {
        "label": "Phone (optional)",
        "name": "phone",
        "type": "tel",
        "autoComplete": "tel"
      }
    ],
    "submit": "Create Account",
    "links": [],
    "note": {
      "text": "Already have an account?",
      "link": {
        "label": "Sign in",
        "href": "/m/login"
      }
    }
  },
  "account": {
    "title": "Account sign in",
    "message": "Sign in to your account to access your profile, history, and any private pages you've been granted access to.",
    "fields": [
      {
        "label": "Email",
        "name": "email",
        "type": "email",
        "autoComplete": "email",
        "required": true
      },
      {
        "label": "Password",
        "name": "password",
        "type": "password",
        "autoComplete": "current-password",
        "required": true
      }
    ],
    "submit": "Sign in",
    "links": [
      {
        "label": "Reset password",
        "href": "/m/reset"
      }
    ],
    "note": {
      "text": "Not a member?",
      "link": {
        "label": "Create account.",
        "href": "/m/create-account"
      }
    }
  }
} satisfies Record<string, AccountPage>;
