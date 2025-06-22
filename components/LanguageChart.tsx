import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Java', value: 60 },
    { name: 'Objective-C', value: 20 },
    { name: 'C#', value: 10 },
    { name: 'Flutter', value: 4 },
    { name: 'HTML', value: 2 },
    { name: 'CSS', value: 2 },
    { name: 'JS', value: 2 },

];

const COLORS = ['#f7951e', '#241f21', '#a47ade', '#54c6f7', '#e34e24', '#274de6', '#edcb32'];

export default function LanguageChart() {
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%" // 少し上にすると凡例が下に収まりやすい
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
                    <Legend verticalAlign="bottom" height={36} /> {/* ✅ 凡例を下に追加 */}
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}