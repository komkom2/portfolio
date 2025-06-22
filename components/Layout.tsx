// components/Layout.tsx
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div style={{
            maxWidth: '950px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
            {children}
        </div>
    );
}