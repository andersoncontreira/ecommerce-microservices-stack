// src/services/authService.ts
interface AuthResponse {
    success: boolean;
    message?: string;
    token?: string;
    user?: { email: string };
}

export async function authenticate(email: string, password: string): Promise<AuthResponse> {
    // Simulando uma chamada a um serviço de autenticação
    return new Promise<AuthResponse>((resolve) => {
        setTimeout(() => {
            if ((email === "user@example.com" && password === "password") ||
                (email !== '' && password !== '')
            ) {
                resolve({ success: true, token: "fake-jwt-token", user: { email: "user@example.com" } });
            } else {
                resolve({ success: false, message: "Invalid credentials" });
            }
        }, 1000);
    });
}

export async function register(email: string, password: string): Promise<AuthResponse> {
    // Simulando uma chamada a um serviço de cadastro
    return new Promise<AuthResponse>((resolve) => {
        setTimeout(() => {
            if (email !== "user@example.com") {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: "User already exists" });
            }
        }, 1000);
    });
}

export async function forgotPassword(email: string): Promise<AuthResponse> {
    // Simulando uma chamada a um serviço de recuperação de senha
    return new Promise<AuthResponse>((resolve) => {
        setTimeout(() => {
            if (email === "user@example.com") {
                resolve({ success: true, message: "Password reset link sent to your email" });
            } else {
                resolve({ success: false, message: "Email not found" });
            }
        }, 1000);
    });
}