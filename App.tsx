
import React, { useState, useCallback } from 'react';
import EditableText from './components/EditableText';

// TYPE DEFINITIONS
interface DiagramTextState {
  mdm2: string;
  p55: string;
  alphaHelix: string;
  wildType: string;
  tightBinding: string;
  spalaxR174k: string;
  looseBinding: string;
  substitutions: string;
  nannonsalax: string;
  peromyscus: string;
  onychomys: string;
  nannunspalax: string;
  convergentHypoxia: string;
  rnaSeq: string;
  cdkn1a: string;
  apaf1: string;
  survival: string;
  apoptosis: string;
  transcriptomicShift: string;
  hypoxiaSurvival: string;
}

// SVG ICONS (defined outside the main component to prevent re-creation on re-renders)
const ProteinIcon = () => (
    <svg width="150" height="100" viewBox="0 0 150 100" className="absolute top-0 left-10">
        <path d="M 60,30 C 40,10 20,40 30,60 S 50,90 70,80 S 100,60 120,70 S 140,90 130,60 S 100,10 80,20 C 70,25 65,35 60,30 Z" fill="#8BC3A8" stroke="#4A4A4A" strokeWidth="2" />
        <path d="M 65,35 C 55,25 45,45 55,55 S 75,75 85,65 S 105,45 115,55" fill="none" stroke="#4A4A4A" strokeWidth="1.5" />
        <path d="M 90,40 C 80,30 70,50 80,60 S 100,80 110,70" fill="none" stroke="#4A4A4A" strokeWidth="1.5" />
        <ellipse cx="60" cy="30" rx="10" ry="5" fill="#C8E6C9" />
    </svg>
);

const HandshakeIcon = () => (
    <svg width="120" height="60" viewBox="0 0 120 60">
        <path d="M 20,30 C 10,40 10,50 25,55 L 70,45 C 80,42 90,30 80,20 C 70,10 50,15 40,20 Z" fill="#F2D5C2" stroke="#4A4A4A" strokeWidth="2" />
        <path d="M 100,30 C 110,20 110,10 95,5 L 50,15 C 40,18 30,30 40,40 C 50,50 70,45 80,40 Z" fill="#F2D5C2" stroke="#4A4A4A" strokeWidth="2" />
    </svg>
);

const MoleRatIcon = () => (
    <svg width="120" height="70" viewBox="0 0 120 70">
        <path d="M 10,40 C 5,30 20,10 40,15 C 60,20 80,15 100,30 C 115,45 110,60 90,65 L 30,65 C 10,60 15,50 10,40 Z" fill="#9E9E9E" stroke="#4A4A4A" strokeWidth="2" />
        <circle cx="95" cy="30" r="3" fill="#4A4A4A" />
        <path d="M 20,65 C 15,70 10,65 15,60" fill="none" stroke="#4A4A4A" strokeWidth="2" />
    </svg>
);

// HEATMAP CELL COMPONENT
const HeatmapCell: React.FC<{ color: string; intensity: number; }> = ({ color, intensity }) => {
    const shades = {
        green: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784'],
        red: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373'],
    };
    const selectedShades = color === 'green' ? shades.green : shades.red;
    return <div className={`w-full h-full ${selectedShades[intensity]}`} style={{backgroundColor: selectedShades[intensity]}}></div>;
};

const HeatmapGrid: React.FC<{ color: 'green' | 'red' }> = ({ color }) => (
    <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
        {color === 'green' 
            ? [2,3,1,2,1,2,0,1].map((i, idx) => <HeatmapCell key={idx} color="green" intensity={i} />)
            : [2,3,1,2,1,2,0,1].reverse().map((i, idx) => <HeatmapCell key={idx} color="red" intensity={i} />)
        }
    </div>
);


// MAIN APP COMPONENT
const App: React.FC = () => {
    const [texts, setTexts] = useState<DiagramTextState>({
        mdm2: "MDM2",
        p55: "p55",
        alphaHelix: "α-HELIX",
        wildType: "WILD-TYPE",
        tightBinding: "TIGHT BINDING",
        spalaxR174k: "SPALAX R174K",
        looseBinding: "LOOSE BINDING",
        substitutions: "Substitutions leaditog reduaing",
        nannonsalax: "Nannonsalax",
        peromyscus: "Peromyscus",
        onychomys: "Onychomys",
        nannunspalax: "Nannunspalax",
        convergentHypoxia: "CONVERGENT HYPOXIA ADAPTATION",
        rnaSeq: "RNA-seq",
        cdkn1a: "CDKN1A/p21",
        apaf1: "APAF1",
        survival: "SURVIVAL",
        apoptosis: "APOPTOSIS",
        transcriptomicShift: "Transcriptomic shift",
        hypoxiaSurvival: "Hypoxia survival",
    });

    const handleTextChange = useCallback((key: keyof DiagramTextState, value: string) => {
        setTexts(prev => ({ ...prev, [key]: value }));
    }, []);

    return (
        <div className="bg-[#FBFBF6] min-h-screen flex items-center justify-center p-8 font-sans text-[#4A4A4A]">
            <div className="relative w-[1100px] h-[700px]">
                {/* SECTION 1: BINDING */}
                <div className="absolute top-[40px] left-0 w-[280px]">
                    <div className="relative h-[120px]">
                        <ProteinIcon />
                        <EditableText value={texts.mdm2} onChange={v => handleTextChange('mdm2', v)} className="absolute top-2 right-10 text-lg font-semibold"/>
                        <EditableText value={texts.p55} onChange={v => handleTextChange('p55', v)} className="absolute top-8 left-16 text-sm bg-opacity-80 px-1 rounded"/>
                        <EditableText value={texts.alphaHelix} onChange={v => handleTextChange('alphaHelix', v)} className="absolute top-20 left-12 text-md"/>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <HandshakeIcon />
                        <EditableText value={texts.wildType} onChange={v => handleTextChange('wildType', v)} className="font-bold tracking-wider text-center"/>
                        <EditableText value={texts.tightBinding} onChange={v => handleTextChange('tightBinding', v)} className="font-bold tracking-wider text-center"/>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <HandshakeIcon />
                        <EditableText value={texts.spalaxR174k} onChange={v => handleTextChange('spalaxR174k', v)} className="font-bold tracking-wider text-center"/>
                        <EditableText value={texts.looseBinding} onChange={v => handleTextChange('looseBinding', v)} className="font-bold tracking-wider text-center"/>
                    </div>
                </div>

                {/* SECTION 2: PHYLOGENETIC TREE */}
                <div className="absolute top-[130px] left-[350px] w-[300px] h-[300px]">
                    <div className="absolute top-0 left-0 w-px h-[100px] bg-[#4A4A4A]"></div>
                    <div className="absolute top-20 left-0 w-[50px] h-px bg-[#4A4A4A]"></div>
                    <div className="absolute top-20 left-[50px] w-px h-[120px] bg-[#4A4A4A]"></div>

                    <div className="absolute top-0 left-0 w-[100px] h-px bg-[#4A4A4A]"></div>
                    <EditableText value={texts.nannonsalax} onChange={v => handleTextChange('nannonsalax', v)} className="absolute -top-3 left-[110px]"/>

                    <div className="absolute top-10 left-[50px] w-[50px] h-px bg-[#4A4A4A]"></div>
                    <EditableText value={texts.peromyscus} onChange={v => handleTextChange('peromyscus', v)} className="absolute top-7 left-[110px]"/>
                    
                    <div className="absolute top-20 left-[50px] w-[50px] h-px bg-[#4A4A4A]"></div>
                    <EditableText value={texts.onychomys} onChange={v => handleTextChange('onychomys', v)} className="absolute top-[70px] left-[110px]"/>

                    <div className="absolute top-[120px] left-[100px] bg-gray-200 border border-[#4A4A4A] px-2 py-0.5 rounded-md">
                        <EditableText value={texts.nannunspalax} onChange={v => handleTextChange('nannunspalax', v)} className="font-semibold"/>
                    </div>

                    <div className="absolute top-[220px] left-0 w-[100px] h-px bg-[#4A4A4A]"></div>
                    <EditableText value={texts.convergentHypoxia} onChange={v => handleTextChange('convergentHypoxia', v)} className="absolute top-[210px] left-[110px] w-[150px] leading-tight font-bold"/>
                </div>

                {/* SECTION 3: RNA-SEQ HEATMAP */}
                <div className="absolute top-[50px] right-0 w-[300px]">
                    <EditableText value={texts.rnaSeq} onChange={v => handleTextChange('rnaSeq', v)} className="text-center font-semibold text-lg mb-2 w-full"/>
                    <div className="w-full h-[200px] grid grid-cols-2 grid-rows-2 border-2 border-[#4A4A4A]">
                        <div className="relative border-r-2 border-b-2 border-[#4A4A4A] flex items-center justify-center p-2">
                           <div className="absolute inset-0">
                                <HeatmapGrid color="green" />
                           </div>
                           <div className="relative bg-white/70 backdrop-blur-sm px-3 py-1 rounded">
                             <EditableText value={texts.cdkn1a} onChange={v => handleTextChange('cdkn1a', v)} className="text-center font-bold text-green-800"/>
                           </div>
                        </div>
                        <div className="border-b-2 border-[#4A4A4A]">
                             <HeatmapGrid color="green" />
                        </div>
                        <div className="relative border-r-2 border-[#4A4A4A] flex items-center justify-center p-2">
                            <div className="absolute inset-0">
                                <HeatmapGrid color="red" />
                            </div>
                            <div className="relative bg-white/70 backdrop-blur-sm px-3 py-1 rounded">
                                <EditableText value={texts.apaf1} onChange={v => handleTextChange('apaf1', v)} className="text-center font-bold text-red-800"/>
                            </div>
                        </div>
                        <div>
                             <HeatmapGrid color="red" />
                        </div>
                    </div>
                    <div className="flex justify-around mt-2">
                         <EditableText value={texts.survival} onChange={v => handleTextChange('survival', v)} className="font-bold tracking-wider"/>
                         <EditableText value={texts.apoptosis} onChange={v => handleTextChange('apoptosis', v)} className="font-bold tracking-wider"/>
                    </div>
                </div>

                {/* SECTION 4: MOLE RAT & CONCLUSION */}
                <div className="absolute bottom-[80px] left-[550px] flex items-center space-x-8">
                    <MoleRatIcon />
                    <div className="text-lg">
                        <EditableText value={texts.transcriptomicShift} onChange={v => handleTextChange('transcriptomicShift', v)} className="font-semibold"/>
                        <EditableText value={texts.hypoxiaSurvival} onChange={v => handleTextChange('hypoxiaSurvival', v)} className="font-semibold"/>
                    </div>
                </div>

                {/* ARROWS AND CONNECTORS */}
                <svg className="absolute w-full h-full top-0 left-0 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A4A4A" />
                        </marker>
                    </defs>
                    
                    {/* Binding -> Tree */}
                    <line x1="280" y1="200" x2="340" y2="200" stroke="#4A4A4A" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    
                    {/* Tree -> Heatmap */}
                    <line x1="560" y1="130" x2="780" y2="130" stroke="#4A4A4A" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Spalax -> Substitutions */}
                    <path d="M 140 470 C 180 500, 220 500, 260 480" stroke="#4A4A4A" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <EditableText value={texts.substitutions} onChange={v => handleTextChange('substitutions', v)} className="absolute top-[470px] left-[270px] w-40 leading-tight"/>

                    {/* Tree -> Mole Rat */}
                    <path d="M 450 380 C 450 480, 500 550, 550 560" stroke="#4A4A4A" strokeWidth="2" markerEnd="url(#arrowhead)" />

                     {/* Heatmap -> Mole Rat */}
                    <path d="M 850 300 C 850 450, 750 550, 700 560" stroke="#4A4A4A" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>

            </div>
        </div>
    );
};

export default App;
