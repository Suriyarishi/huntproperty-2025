import React from 'react';
import { Building2, Trash2, Plus } from 'lucide-react';

interface TowerDetail {
    id: number;
    name: string;
    floors: string;
    size: string;
    unit: string;
}

interface AddTowerDetailsProps {
    formData: {
        totalTowers: string;
        towerDetails: TowerDetail[];
    };
    updateFormData: (data: any) => void;
}

const AddTowerDetails: React.FC<AddTowerDetailsProps> = ({ formData, updateFormData }) => {
    const handleTotalTowersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ totalTowers: e.target.value });
    };

    const setFormData = (data: any) => updateFormData(data);

    const handleTowerUpdate = (idx: number, field: keyof TowerDetail, value: string) => {
        const newTowers = [...formData.towerDetails];
        newTowers[idx] = { ...newTowers[idx], [field]: value };
        setFormData({ towerDetails: newTowers });
    };

    const removeTower = (idx: number) => {
        const newTowers = formData.towerDetails.filter((_, i) => i !== idx);
        setFormData({ towerDetails: newTowers });
    };

    const addTower = () => {
        const newTower = { id: Date.now(), name: '', floors: '', size: '', unit: 'Sqft' };
        setFormData({ towerDetails: [...formData.towerDetails, newTower] });
    };

    return (
        <div className="space-y-8 animate-fade-in bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm min-h-[500px]">
            <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="w-16 h-16 bg-[#FF8A00]/10 text-[#FF8A00] rounded-2xl flex items-center justify-center">
                    <Building2 size={32} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1a1c21]">
                        Add Tower Details
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        DEFINING PROJECT STRUCTURE & TOWERS
                    </p>
                </div>
            </div>

            <div className="max-w-xs space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Total No of Tower
                </label>
                <input 
                    type="number"
                    value={formData.totalTowers}
                    onChange={handleTotalTowersChange}
                    placeholder="0"
                    className="w-full h-14 bg-gray-50 border border-gray-100 rounded-xl px-6 font-bold text-sm outline-none focus:border-[#FF8A00] shadow-sm"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <th className="px-6 py-2">S. No.</th>
                            <th className="px-6 py-2">Tower Name/ No.</th>
                            <th className="px-6 py-2">Total No of Floor</th>
                            <th className="px-6 py-2">Each Floor Size</th>
                            <th className="px-6 py-2">Unit</th>
                            <th className="px-6 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.towerDetails.map((item, idx) => (
                            <tr key={item.id} className="group">
                                <td className="px-6 h-16 bg-gray-50 border-y border-l border-gray-100 rounded-l-2xl text-sm font-black text-[#1a1c21]">{idx + 1}</td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handleTowerUpdate(idx, 'name', e.target.value)}
                                        placeholder="Sun Court"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#FF8A00]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="number"
                                        value={item.floors}
                                        onChange={(e) => handleTowerUpdate(idx, 'floors', e.target.value)}
                                        placeholder="15"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#FF8A00]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <input 
                                        type="number"
                                        value={item.size}
                                        onChange={(e) => handleTowerUpdate(idx, 'size', e.target.value)}
                                        placeholder="40000"
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-4 font-bold text-xs outline-none focus:border-[#FF8A00]"
                                    />
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-gray-100">
                                    <select 
                                        value={item.unit}
                                        onChange={(e) => handleTowerUpdate(idx, 'unit', e.target.value)}
                                        className="w-full h-10 bg-white border border-gray-100 rounded-lg px-3 font-bold text-xs outline-none focus:border-[#FF8A00]"
                                    >
                                        <option value="Sqft">Sqft</option>
                                        <option value="Sqm">Sqm</option>
                                    </select>
                                </td>
                                <td className="px-6 h-16 bg-gray-50 border-y border-r border-gray-100 rounded-r-2xl">
                                    <button 
                                        onClick={() => removeTower(idx)}
                                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button 
                onClick={addTower}
                className="flex items-center gap-3 h-14 px-8 mt-6 bg-[#FF8A00] shadow-[#FF8A00]/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
                <Plus size={18} /> Add Tower
            </button>
        </div>
    );
};

export default AddTowerDetails;
