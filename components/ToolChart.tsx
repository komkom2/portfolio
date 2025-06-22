// components/ToolChart.tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'AndroidStudio', value: 60 },
    { name: 'Xcode', value: 20 },
    { name: 'VSCode', value: 10 },
    { name: 'VisualStudio', value: 5 },
    { name: 'MicrosoftSQLServer', value: 5 },
];

const COLORS = ['#3ddc84', '#1cb5ed', '#1974b5', '#5c2d91', '#e84747'];

export default function ToolChart() {
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%"
                        innerRadius={50}
                        outerRadius={100}
                        dataKey="value"
                        label={false}
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}