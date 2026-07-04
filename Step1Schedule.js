// Step 1 Schedule — Scriptable Widget
// Paste into Scriptable → long-press home → add Scriptable widget → pick this script
// Tapping opens: https://step1-liart.vercel.app

const APP_URL = "https://step1-liart.vercel.app"
const EXAM_ISO = "2026-10-26"

const SCHEDULE = {
  "2026-06-28":{"s":"Cardio","bc":"Ch 1-4: Embryology & Anatomy · Vascular System · Cardiac Parameters","h":6,"type":"normal","fa":"FA Cardio pp 290-305","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 5 (Cardio Physiology)"},
  "2026-06-29":{"s":"Cardio","bc":"Ch 5-8: Cardiac Function Curves · PV Loops · Vasodilation · Pressure-Flow","h":6,"type":"normal","fa":"FA Cardio pp 306-316","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 116 (Cardio 1)"},
  "2026-06-30":{"s":"Cardio","bc":"Ch 9-12: Cardiac Cycle · RAAS · Exercise & Conduction Physiology","h":6,"type":"normal","fa":"FA Cardio pp 317-323 (EKG, conduction)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 253 (Starling Forces)"},
  "2026-07-01":{"s":"Cardio","bc":"Ch 13-16: Antiarrhythmics · Atrial & Ventricular Arrhythmias · Conduction Block","h":6,"type":"normal","fa":"FA Cardio pp 324-330 (arrhythmias, drugs)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 154 (Cardio 2)"},
  "2026-07-02":{"s":"Cardio","bc":"Ch 17-18: Heart Failure · Cardiomyopathy","h":6,"type":"normal","fa":"FA Cardio pp 331-335","p":"Pathoma Ch 8: HF, cardiomyopathy","sk":"Path: 2.1 Cardiac Hypertrophy & Heart Failure · 2.2 Dilated Cardiomyopathy · 2.3 Hypertrophic Cardiomyopathy · 2.4 Restrictive Cardiomyopathy","uw":20,"an":35,"dv":"Ep 264 (Heart Failure)"},
  "2026-07-03":{"s":"Cardio","bc":"Ch 19-20: Aortic Disease · Valvular Disease","h":6,"type":"normal","fa":"FA Cardio pp 336-342","p":"Pathoma Ch 8 cont: valvular","sk":"Path: 3.1 Endocarditis · 3.2 Rheumatic Heart Disease · 4.2 Valvular Heart Disease (Aortic Stenosis · AR · Mitral Stenosis · MR · MVP) · 4.3 Aortic Aneurysm & Dissection","uw":20,"an":35,"dv":"Ep 244 (Valvular Disease)"},
  "2026-07-04":{"s":"REST","bc":"Anki — Cardio physiology cards. Review EKG diagrams in FA.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-07-05":{"s":"Cardio","bc":"Ch 21-22: Acyanotic & Cyanotic Congenital Heart Defects","h":7,"type":"normal","fa":"FA Cardio pp 343-347 (congenital)","p":"Pathoma Ch 8: congenital","sk":"Path: 5.1 Acyanotic CHD (ASD · VSD · PDA · Coarctation) · 5.2 Cyanotic CHD (Tetralogy of Fallot · TGA · Truncus Arteriosus)","uw":20,"an":35,"dv":"Ep 445 (MI Complications)"},
  "2026-07-06":{"s":"Cardio","bc":"Ch 23-24: Stable Angina & Atherosclerosis · MI","h":7,"type":"normal","fa":"FA Cardio pp 348-353 (atherosclerosis, MI)","p":"Pathoma Ch 7: Vascular","sk":"Path: 1.1 Myocardial Response to Ischemia · 1.2 Atherosclerosis & Coronary Artery Disease · 1.3 MI Complications (Arrhythmia · Free Wall Rupture · Papillary Muscle Rupture · VSD · Dressler Syndrome)","uw":20,"an":35,"dv":"Ep 477 (ACS)"},
  "2026-07-07":{"s":"Cardio","bc":"Ch 25-28: Peripheral Arterial/Venous Disease · HTN · Pericardial Disease · Shock","h":7,"type":"normal","fa":"FA Cardio pp 354-end (HTN, pericardium, shock)","p":null,"sk":"Path: 3.3 Myocarditis · 3.4 Pericardial Disease (Acute Pericarditis · Cardiac Tamponade · Constrictive Pericarditis) · 4.1 Hypertensive Heart Disease · 4.4 Peripheral Arterial & Venous Disease","uw":20,"an":35,"dv":"Ep 233 (Shock)"},
  "2026-07-08":{"s":"Pulm","bc":"Ch 1-3: Intro · Air Physiology · Blood Physiology","h":6,"type":"normal","fa":"FA Pulm pp 656-668 (anatomy, lung volumes, gas exchange)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 66 (Pulm Pharm)"},
  "2026-07-09":{"s":"Pulm","bc":"Ch 4-5: Lung Path Fundamentals · Obstructive Lung Disease","h":7,"type":"normal","fa":"FA Pulm pp 669-678 (COPD, asthma, bronchiectasis)","p":"Pathoma Ch 9: Pulm obstructive","sk":"Path: 1.1 Chronic Obstructive Pulmonary Disease · 1.2 Asthma · 1.3 Bronchiectasis","uw":20,"an":35,"dv":"Ep 392 (Pulm Path 1)"},
  "2026-07-10":{"s":"Pulm","bc":"Ch 6-8: Restrictive Lung Disease & Lung Cancer · PE · ARDS · Pulm HTN","h":7,"type":"normal","fa":"FA Pulm pp 679-end (restrictive, cancer, ARDS)","p":"Pathoma Ch 9 cont","sk":"Path: 2.1 Pneumonia (Bacterial · Atypical · Viral) · 2.2 Idiopathic Pulmonary Fibrosis · 2.3 Sarcoidosis & Pneumoconioses · Vascular 3.3 DVT & Pulmonary Embolism · 3.4 Pulmonary Hypertension · 3.5 ARDS · Oncology 4.1 Lung Cancer (Adenocarcinoma · SCC · SCLC · Large Cell)","uw":20,"an":35,"dv":"Ep 286 (ARDS)"},
  "2026-07-11":{"s":"REST","bc":"Anki — Cardio path + Pulm. Review cardiac cycle diagrams.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-07-12":{"s":"Renal","bc":"Ch 1-2: Anatomy & Embryology · Fluid & Filtration","h":6,"type":"normal","fa":"FA Renal pp 580-590 (anatomy, GFR, clearance)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 52 (Renal 1)"},
  "2026-07-13":{"s":"Renal","bc":"Ch 3-5: Nephron Transporters · RAAS · Electrolytes","h":6,"type":"normal","fa":"FA Renal pp 591-600 (tubular function, electrolytes)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 53 (Renal 2)"},
  "2026-07-14":{"s":"Renal","bc":"Ch 6-8: Acid-Base Physiology · Path Diagnostics · Nephrotic Syndromes","h":7,"type":"normal","fa":"FA Renal pp 601-608 (acid-base, nephrotic)","p":"Pathoma Ch 12: Renal","sk":"Path: 1.1 Renal Function Tests & AKI · 2.1 Nephrotic Syndrome","uw":20,"an":35,"dv":"Ep 470 (Acid-Base)"},
  "2026-07-15":{"s":"Renal","bc":"Ch 9-12: Nephritic Syndromes · Nephrolithiasis · Urinary Incontinence · AKI","h":7,"type":"normal","fa":"FA Renal pp 609-616 (nephritic, stones, AKI, CKD)","p":null,"sk":"Path: 3.1 Nephritic Syndrome · 3.2 Nephrolithiasis (Calcium Oxalate · Uric Acid · Struvite · Cystine) · 3.3 UTI & Pyelonephritis · 3.4 CKD","uw":20,"an":35,"dv":"Ep 169 (Nephrotic/Nephritic)"},
  "2026-07-16":{"s":"Renal","bc":"Ch 13-15: Inflammatory Conditions & Malignancy · Cystic Kidney Disease · Pharm","h":7,"type":"normal","fa":"FA Renal pp 616-end (CKD, pharm, PKD)","p":"Pathoma Ch 12 cont","sk":"Path: 5.1 Renal Cell Carcinoma · 5.2 Nephroblastoma (Wilms Tumor) · 5.3 Bladder Cancer (Transitional Cell · SCC) · 5.4 ADPKD & ARPKD · 6.5 Renal Tubular Acidosis","uw":20,"an":35,"dv":"Ep 287 (Urinalysis)"},
  "2026-07-17":{"s":"Neuro","bc":"Ch 1-3: Embryology · Cellular Function · Ascending Tracts","h":6,"type":"normal","fa":"FA Neuro pp 524-538 (spinal anatomy, tracts)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 87 (Neuro 1)"},
  "2026-07-18":{"s":"REST","bc":"Anki — Renal consolidation. Review tubular transport diagram.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-07-19":{"s":"Neuro","bc":"Ch 4-6: Descending Tracts · Brainstem Anatomy · Cerebral Cortex","h":6,"type":"normal","fa":"FA Neuro pp 539-552 (brainstem, lobes)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 89 (Neuro 2)"},
  "2026-07-20":{"s":"Neuro","bc":"Ch 7-9: Radiculopathy · Spinal Cord Syndromes · Invasive Spinal Cord Disease","h":6,"type":"normal","fa":"FA Neuro pp 553-562 (spinal cord lesions)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 371 (Spinal Cord)"},
  "2026-07-21":{"s":"Neuro","bc":"Ch 10-13: Demyelinating Disease · NMJ · Cranial Nerves I-VI","h":7,"type":"normal","fa":"FA Neuro pp 563-575 (MS, NMJ, CN I-VI)","p":"Pathoma Ch 17: CNS (intro)","sk":"Path: 1.3 Multiple Sclerosis · 1.4 Myasthenia Gravis · 1.5 Lambert-Eaton Myasthenic Syndrome","uw":20,"an":35,"dv":"Ep 435 (NMJ Disorders)"},
  "2026-07-22":{"s":"Neuro","bc":"Ch 14-17: Cranial Nerves VII-XII · Vision · Auditory Sensation · Vertigo","h":6,"type":"normal","fa":"FA Neuro pp 576-588 (CN VII-XII, eye, ear)","p":null,"sk":null,"uw":20,"an":35,"dv":"Ep 361 (Eye 1)"},
  "2026-07-23":{"s":"Neuro","bc":"Ch 18-19: Pediatric & Adult Brain Tumors","h":7,"type":"normal","fa":"FA Neuro pp 589-595 (CNS tumors)","p":"Pathoma Ch 17: CNS tumors","sk":"Path: 2.1 Intracranial Hypertension · 2.2 Hydrocephalus · Oncology 3.1 Primary Brain Tumors (GBM · Astrocytoma · Meningioma · Medulloblastoma · Acoustic Neuroma · Craniopharyngioma · Oligodendroglioma)","uw":30,"an":35,"dv":"Ep 516 (Brain Tumors)"},
  "2026-07-24":{"s":"Neuro","bc":"Ch 20-21: Ischemic CVAs · Aneurysms & ICH","h":7,"type":"normal","fa":"FA Neuro pp 596-602 (stroke syndromes)","p":"Pathoma Ch 17: CVA","sk":"Path: 4.1 Ischemic Stroke & Lacunar Infarcts · 4.2 Hemorrhagic Stroke & Subarachnoid Hemorrhage","uw":30,"an":35,"dv":"Ep 315 (Circle of Willis)"},
  "2026-07-25":{"s":"REST","bc":"Anki — Neuro anatomy. Review spinal cord tracts in FA.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-07-26":{"s":"Neuro","bc":"Ch 22-24: Cerebellum & Ventricles · Diencephalon · Basal Ganglia","h":7,"type":"normal","fa":"FA Neuro pp 603-615 (cerebellum, BG, hydrocephalus)","p":null,"sk":"Path: 3.3 Guillain-Barré & Charcot-Marie-Tooth · 4.2 Sturge-Weber & Tuberous Sclerosis · 4.3 Neurofibromatosis","uw":30,"an":35,"dv":"Ep 133 (Neuro 3)"},
  "2026-07-27":{"s":"Neuro","bc":"Ch 25-26: Neurotransmitters in Psych Disease & Dementia","h":7,"type":"normal","fa":"FA Neuro pp 616-622 (NT, dementia, Alzheimer's, Parkinson's)","p":"Pathoma Ch 17: neurodegen","sk":"Path: 5.1 Alzheimer Disease & Dementia · 5.2 Parkinson Disease · 5.3 Huntington Disease · 5.4 ALS & Friedreich Ataxia","uw":30,"an":35,"dv":"Ep 374 (Spinal Cord Lesions)"},
  "2026-07-28":{"s":"Neuro","bc":"Ch 27-29: Headache & Seizures · Traumatic Brain Injuries · Neuro UWorld 60 Qs timed","h":8,"type":"normal","fa":"FA Neuro pp 623-end (seizures, TBI) — error review","p":null,"sk":"Pharm: 2.1 AEDs — Phenytoin & Valproate · 2.2 Carbamazepine, Lamotrigine & Levetiracetam · 2.3 Ethosuximide","uw":60,"an":35,"dv":"Ep 372 (Headache)"},
  "2026-07-29":{"s":"Repro","bc":"Ch 1-2: Fetal Development · Pregnancy","h":7,"type":"normal","fa":"FA Repro pp 612-625 (embryo, pregnancy)","p":null,"sk":"Path: 1.1 Obstetric Complications (PROM, Oligohydramnios, Polyhydramnios) · 1.2 Ectopic Pregnancy & Molar Pregnancy","uw":30,"an":35,"dv":"Ep 142 (Repro 1)"},
  "2026-07-30":{"s":"Repro","bc":"Ch 3: Pathology of Pregnancy","h":7,"type":"normal","fa":"FA Repro pp 626-635 (placenta, eclampsia, ectopic)","p":"Pathoma Ch 13-14: Repro","sk":"Path: 1.3 Preeclampsia & Eclampsia · 1.4 Placenta Previa & Abruptio Placentae · 1.5 Gestational Diabetes","uw":30,"an":35,"dv":"Ep 338 (Fetal HR)"},
  "2026-07-31":{"s":"Repro","bc":"Ch 4: Female Pathology","h":8,"type":"normal","fa":"FA Repro pp 636-645 (ovary, uterus, cervix, breast)","p":"Pathoma Ch 14-15 cont","sk":"Path: 2.1 Reproductive Hormones & PCOS · 2.2 Ovarian Tumors (Serous/Mucinous Cystadenoma · Dermoid · Granulosa Cell · Krukenberg) · 2.3 Endometrial Carcinoma & Uterine Fibroids · 2.4 Cervical Dysplasia & Cervical Cancer (HPV 16/18) · 2.5 Breast Cancer (DCIS · IDC · ILC · Paget Disease of Nipple · Inflammatory)","uw":30,"an":35,"dv":"Ep 157 (Repro 2)"},
  "2026-08-01":{"s":"REST","bc":"Anki — Neuro path + cranial nerves. Review brainstem cross-sections.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-02":{"s":"Repro","bc":"Ch 5: Male Pathology · Ch 6: Reproductive Pharmacology","h":8,"type":"normal","fa":"FA Repro pp 646-end (male repro, contraceptives)","p":null,"sk":"Path: 3.1 Prostate Cancer · 3.2 Benign Prostatic Hyperplasia · 3.3 Testicular Tumors (Seminoma · NSGCT: Embryonal · Yolk Sac · Choriocarcinoma · Teratoma) | Pharm: 3.4 Contraceptives · 3.5 Estrogen/Progesterone/Androgens","uw":30,"an":35,"dv":"Ep 531 (Contraceptives)"},
  "2026-08-03":{"s":"Immuno","bc":"Ch 1-3: Lymphoid Tissue · Innate Immunity · Inflammatory Response","h":7,"type":"normal","fa":"FA Immuno pp 96-108 (innate, complement, inflammation)","p":"Pathoma Ch 2: Inflammation","sk":"Path: 2.1 Hypersensitivity Types I-IV · 2.2 Autoimmune Diseases (SLE, Sjogren's Syndrome, Scleroderma)","uw":30,"an":35,"dv":"Ep 136 (Immuno 1)"},
  "2026-08-04":{"s":"Immuno","bc":"Ch 4-7: Cytokines · T-cells · B-cells & Antibodies","h":7,"type":"normal","fa":"FA Immuno pp 109-115 (adaptive immunity)","p":null,"sk":"Path: 2.3 Rheumatoid Arthritis · 3.1 Systemic Vasculitis (Giant Cell, PAN, Wegener's, Churg-Strauss)","uw":30,"an":35,"dv":"Ep 279 (Prostaglandins)"},
  "2026-08-05":{"s":"Immuno","bc":"Ch 8-10: Complement · Vaccinations · Immunodeficiency Syndromes","h":7,"type":"normal","fa":"FA Immuno pp 116-120 (complement, immunodef)","p":null,"sk":"Path: 4.1 Primary Immunodeficiency Syndromes (SCID · Bruton's · DiGeorge · CVID · Wiskott-Aldrich · Job's)","uw":30,"an":35,"dv":"Ep 173 (Immunodeficiency)"},
  "2026-08-06":{"s":"Immuno","bc":"Ch 11-13: Hypersensitivity · Transfusion Reactions · Transplant Rejection","h":7,"type":"normal","fa":"FA Immuno pp 121-end (HSR types I-IV, transplant)","p":null,"sk":"Path: 4.2 Transplant Rejection (Hyperacute/Acute/Chronic) · 4.3 Transfusion Reactions & Blood Group Antigens","uw":30,"an":35,"dv":"Ep 323 (Immunocompromised)"},
  "2026-08-07":{"s":"Psych","bc":"Ch 1-2: Psychology & Developmental Disorders","h":7,"type":"normal","fa":"FA Psych pp 542-552 (development, Erikson, Piaget)","p":null,"sk":"Pharm: 4.3 Mood Stabilizers (Lithium, Valproate, Lamotrigine) · 4.4 Buspirone & Non-Benzo Anxiolytics","uw":30,"an":35,"dv":"Ep 229 (Psych 1)"},
  "2026-08-08":{"s":"REST","bc":"Anki — Repro + Immuno intro. Review hormone table in FA.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-09":{"s":"Psych","bc":"Ch 3-5: Memory · Dissociation · Anxiety · Trauma & Personality Disorders","h":7,"type":"normal","fa":"FA Psych pp 553-562 (anxiety, PTSD, personality)","p":null,"sk":"Pharm: 6.1 Benzodiazepines · 6.2 Barbiturates · 6.3 Buspirone · 6.4 Z-drugs (Zolpidem, Zaleplon, Eszopiclone)","uw":30,"an":35,"dv":"Ep 453 (Psych Timelines)"},
  "2026-08-10":{"s":"Psych","bc":"Ch 6-8: Psychosis & Mood Disorders · Sleep & Psychosomatic · Substance Misuse","h":7,"type":"normal","fa":"FA Psych pp 563-572 (schizophrenia, bipolar, MDD, substance)","p":null,"sk":"Pharm: 4.1 Typical Antipsychotics (Haloperidol, Chlorpromazine, Thioridazine) · 4.2 Atypical Antipsychotics (Clozapine, Risperidone, Olanzapine, Quetiapine, Aripiprazole)","uw":30,"an":35,"dv":"Ep 451 (Serotonin Syndrome)"},
  "2026-08-11":{"s":"Psych","bc":"Ch 9: Psychiatry Pharmacology — full psychopharmacology deep dive","h":8,"type":"normal","fa":"FA Psych pp 573-end (antipsychotics, antidepressants, mood stabilizers)","p":null,"sk":"Pharm: 5.1 SSRIs & SNRIs · 5.2 Tricyclic Antidepressants (Amitriptyline, Imipramine, Clomipramine) · 5.3 MAOIs · 5.4 Bupropion & Mirtazapine","uw":30,"an":35,"dv":"Ep 67 (Psych Pharm)"},
  "2026-08-12":{"s":"Pharm","bc":"Ch 1-2: Pharmacodynamics · Pharmacokinetics","h":7,"type":"normal","fa":"FA Pharm pp 230-240 (PK/PD, dose-response, half-life)","p":null,"sk":"Pharm: 4.1 G-Protein Coupled Receptors · 4.2 Tyrosine Kinase Receptors · 4.3 Nuclear Receptors & Dose-Response","uw":30,"an":35,"dv":"Ep 471 (Receptors 1)"},
  "2026-08-13":{"s":"Pharm","bc":"Ch 3: Autonomic System","h":7,"type":"normal","fa":"FA Pharm pp 241-248 (ANS, cholinergics, adrenergics)","p":null,"sk":"Pharm Autonomic: 1.1 Cholinomimetics · 1.2 Anticholinesterases · 1.3 Muscarinic Antagonists · 2.1 Adrenergic Agonists · 2.2 Alpha Blockers · 2.3 Beta Blockers","uw":30,"an":35,"dv":"Ep 18 (ANS Pharm)"},
  "2026-08-14":{"s":"Pharm","bc":"Ch 4: Side Effects & Toxins — comprehensive pharmacology toxicology","h":7,"type":"normal","fa":"FA Pharm pp 249-end (toxidromes, SE mnemonics)","p":null,"sk":"Pharm: 5.1 Drug-Induced Toxicity (SIADH, SJS, Agranulocytosis) · 5.2 HY Drug Side Effects (Sulfa drugs, QT prolongation, P450 interactions)","uw":30,"an":35,"dv":"Ep 387 (Drug Reactions 1)"},
  "2026-08-15":{"s":"REST","bc":"Anki — Immuno + Pharm. Review hypersensitivity table.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-16":{"s":"NBME","bc":"🎯 NBME Form 25 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme","fa":"FA — error-driven review","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-17":{"s":"Review","bc":"NBME 25 error review — annotate every wrong answer in FA. Identify top 3 weak subjects.","h":8,"type":"normal","fa":"FA — error sections","p":null,"sk":null,"uw":40,"an":0,"dv":"Ep 184 (NBME Weird Questions)"},
  "2026-08-18":{"s":"Genetics","bc":"Ch 1-3: DNA Structure · DNA Replication · DNA Mutations","h":7,"type":"normal","fa":"FA Biochem pp 36-46 (DNA repair, mutations, lab techniques)","p":null,"sk":"Path: 1.1 Chromosomal Disorders (Down Syndrome T21 · Turner 45X · Klinefelter 47XXY · Patau T13 · Edwards T18)","uw":40,"an":50,"dv":"Ep 138 (Genetic Diseases)"},
  "2026-08-19":{"s":"Genetics","bc":"Ch 4-7: Mitosis/Meiosis · Lab Techniques · Clinical Genetics · HY Disorders","h":8,"type":"normal","fa":"FA Biochem pp 47-58 (inheritance patterns, karyotypes)","p":null,"sk":"Path: 1.2 X-linked Recessive Disorders (Duchenne/Becker MD · Hemophilia A/B · G6PD · Bruton · Fabry · Hunter) · 1.3 Autosomal Dominant (Marfan · NF1/NF2 · Huntington · ADPKD · Li-Fraumeni · BRCA1/2) · 1.4 Autosomal Recessive (PKU · CF · Gaucher · Wilson · Hemochromatosis · Alkaptonuria) · 1.5 Trinucleotide Repeats (Fragile X · Huntington · Myotonic Dystrophy · Friedreich Ataxia) · 1.6 Genomic Imprinting (Prader-Willi · Angelman)","uw":40,"an":50,"dv":"Ep 424 (Inheritance Modes)"},
  "2026-08-20":{"s":"Heme","bc":"Ch 1-3: Embryology · Blood Cells · Microcytic Anemias","h":8,"type":"normal","fa":"FA Heme pp 384-396 (iron def, thalassemia, sideroblastic)","p":"Pathoma Ch 5: RBC","sk":"Path: 1.1 Iron Deficiency Anemia · 1.2 Beta-Thalassemia · 1.3 Sickle Cell Disease · 1.4 Sideroblastic Anemia · 1.5 Lead Poisoning","uw":40,"an":50,"dv":"Ep 4 (Heme)"},
  "2026-08-21":{"s":"Heme","bc":"Ch 4-5: Normocytic Anemias · Macrocytic Anemias","h":8,"type":"normal","fa":"FA Heme pp 397-405 (hemolytic, B12, folate, aplastic)","p":"Pathoma Ch 5 cont","sk":"Path: 2.1 Hemolytic Anemias (G6PD, Hereditary Spherocytosis, AIHA, TTP/HUS, PNH) · 2.2 B12 & Folate Deficiency · 2.3 Aplastic Anemia","uw":40,"an":50,"dv":"Ep 226 (Iron Labs)"},
  "2026-08-22":{"s":"REST","bc":"Anki — Genetics + Heme. Review inheritance patterns in FA.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-23":{"s":"Heme","bc":"Ch 6-7: Platelets · Coagulation & Fibrinolysis","h":8,"type":"normal","fa":"FA Heme pp 406-415 (platelets, VWD, hemophilia, DIC, TTP)","p":"Pathoma Ch 4: Hemostasis","sk":"Path: 3.1 Hemophilia A & B · 3.2 Von Willebrand Disease · 3.3 DIC & TTP/HUS · 3.4 Thrombocytopenia (ITP, HIT)","uw":40,"an":50,"dv":"Ep 444 (Thrombosis)"},
  "2026-08-24":{"s":"Heme","bc":"Ch 8-10: Oncology & Therapeutics · Leukemias & Lymphomas · Plasma Cell Dyscrasias","h":8,"type":"normal","fa":"FA Heme pp 416-end (ALL/AML/CLL/CML, Hodgkin/NHL, MM)","p":"Pathoma Ch 3: Neoplasia + Ch 6: WBC","sk":"Path: 1.1 Myeloid Proliferative Disorders (CML · PV · ET · Myelofibrosis) · 1.2 AML & MDS · 2.1 ALL & CLL · 3.1 Hodgkin Lymphoma · 3.2 Non-Hodgkin Lymphoma (Diffuse Large B-Cell · Follicular · Burkitt · Mantle Cell) · 4.1 Multiple Myeloma & Plasma Cell Dyscrasias","uw":40,"an":50,"dv":"Ep 203 (Leukemia/Lymphoma)"},
  "2026-08-25":{"s":"Derm","bc":"Ch 1-3: General Principles · Infectious Diseases of Skin · Inflammatory Diseases","h":7,"type":"normal","fa":"FA Derm pp 478-490 (lesion types, psoriasis, eczema, SJS)","p":"Pathoma Ch 19: Skin","sk":"Path: 1.1 Psoriasis · 1.2 Atopic Dermatitis & Contact Dermatitis · 1.3 Acne & Rosacea · 2.1 Bullous Pemphigoid · 2.2 Pemphigus Vulgaris · 2.3 SJS/TEN","uw":40,"an":50,"dv":"Ep 242 (Derm 1)"},
  "2026-08-26":{"s":"Derm","bc":"Ch 4-5: Malignant Skin Disorders & Additional Disorders","h":7,"type":"normal","fa":"FA Derm pp 491-end (BCC, SCC, melanoma, pemphigus)","p":null,"sk":"Path: 3.1 Basal Cell Carcinoma · 3.2 Squamous Cell Carcinoma · 3.3 Melanoma · 3.4 Actinic Keratosis & Seborrheic Keratosis","uw":40,"an":50,"dv":"Ep 246 (Derm 2)"},
  "2026-08-27":{"s":"Biostat","bc":"Ch 1-3: Study Designs · Bias & Study Errors · Risk Quantification","h":7,"type":"normal","fa":"FA Public Health pp 256-268 (study types, bias, RR, OR)","p":null,"sk":null,"uw":40,"an":50,"dv":"Ep 143 (Biostatistics)"},
  "2026-08-28":{"s":"Biostat","bc":"Ch 4-6: Diagnostic Tests · Statistical Distributions · Statistical Testing","h":7,"type":"normal","fa":"FA Public Health pp 269-280 (sensitivity/specificity, NNT, p-value)","p":null,"sk":null,"uw":40,"an":50,"dv":"Ep 363 (Confounding)"},
  "2026-08-29":{"s":"REST","bc":"Anki — Heme + Derm + Biostat. Review coagulation cascade.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-08-30":{"s":"Endo","bc":"Ch 1-3: Fundamentals · Hypothalamus · Anterior & Posterior Pituitary","h":8,"type":"normal","fa":"FA Endo pp 336-348 (HPA axis, pituitary hormones, SIADH, DI)","p":"Pathoma Ch 16: Endocrine","sk":"Path: 1.1 Hypopituitarism (Sheehan · Empty Sella · Craniopharyngioma) · 1.2 SIADH & Diabetes Insipidus · 1.3 Hyperpituitarism (Prolactinoma · Acromegaly · Cushing Disease)","uw":40,"an":50,"dv":"Ep 514 (Endo Testing)"},
  "2026-08-31":{"s":"Endo","bc":"Ch 4-5: Thyroid · Parathyroids","h":8,"type":"normal","fa":"FA Endo pp 349-358 (thyroid path, Graves/Hashimoto, Ca2+ disorders)","p":null,"sk":"Path: 3.1 Thyroid Disorders (Graves · Hashimoto · Thyroid Cancer: Papillary · Follicular · Medullary · Anaplastic) · 3.2 Hyperparathyroidism (Primary/Secondary/Tertiary) · 3.3 Hypoparathyroidism & Pseudohypoparathyroidism","uw":40,"an":50,"dv":"Ep 251 (Thyroid)"},
  "2026-09-01":{"s":"Endo","bc":"Ch 6-7: Adrenal Glands · Pancreas (Diabetes)","h":8,"type":"normal","fa":"FA Endo pp 359-end (Cushing/Addison/Conn/pheo, DM, DKA, HHS)","p":"Pathoma Ch 16 cont","sk":"Path: 2.1 Adrenal Insufficiency (Addison Disease · Waterhouse-Friderichsen) · 2.2 Cushing Syndrome & Disease · 2.3 Hyperaldosteronism (Conn Syndrome) · 2.4 Pheochromocytoma · 3.1 Diabetes Mellitus Type 1 & Type 2 · 3.2 DKA & HHS · 3.3 Carcinoid Tumor · 4.6 Multiple Endocrine Neoplasia (MEN 1 · MEN 2A · MEN 2B)","uw":40,"an":50,"dv":"Ep 301 (Diabetes 1)"},
  "2026-09-02":{"s":"Public Health","bc":"Ch 1-5: Ethics · Communication · Delivering Care · Safety · Practice Qs","h":7,"type":"normal","fa":"FA Public Health pp 281-end (ethics, informed consent, HIPAA)","p":null,"sk":null,"uw":40,"an":50,"dv":"Ep 123 (Ethics)"},
  "2026-09-03":{"s":"GI","bc":"Ch 1-4: Embryology · Oral Cavity · Esophagus · Stomach","h":8,"type":"normal","fa":"FA GI pp 364-378 (embryo, GERD, Barrett's, PUD, gastric cancer)","p":"Pathoma Ch 10: GI upper","sk":"Path: 1.1 Structural Esophageal Disorders & GERD · 1.2 Esophageal Cancer (SCC · Adenocarcinoma/Barrett Esophagus) · 2.1 Peptic Ulcer Disease · 2.2 Gastric Cancer (Adenocarcinoma · Linitis Plastica · MALT Lymphoma · GISTs) · 2.3 Gastritis (H. pylori · Autoimmune) · 2.4 Congenital GI Disorders","uw":40,"an":50,"dv":"Ep 489 (Esophagus)"},
  "2026-09-04":{"s":"GI","bc":"Ch 5-7: Liver · Biliary System · Pancreas","h":8,"type":"normal","fa":"FA GI pp 379-395 (hepatitis serology, cirrhosis, biliary, pancreas)","p":"Pathoma Ch 10-11: Liver/Pancreas","sk":"Path: 4.1 Liver Disease & Cirrhosis · 4.2 Hepatocellular Carcinoma · 5.1 Cholelithiasis & Cholecystitis · 5.2 Cholangiocarcinoma & PSC/PBC · 6.1 Acute & Chronic Pancreatitis · 6.2 Pancreatic Adenocarcinoma","uw":40,"an":50,"dv":"Ep 503 (LFTs)"},
  "2026-09-05":{"s":"REST","bc":"Anki — Endo + GI. Review MEN table in FA.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-06":{"s":"GI","bc":"Ch 8-10: Small Intestine · Large Intestine · Hernias","h":8,"type":"normal","fa":"FA GI pp 396-end (malabsorption, IBD, colorectal cancer)","p":"Pathoma Ch 10 cont","sk":"Path: 3.1 Inflammatory Bowel Disease (Crohn's · UC) · 3.2 Colorectal Cancer & Polyps (FAP · Lynch Syndrome · Villous Adenoma) · 3.3 Malabsorption Syndromes (Celiac Disease · Whipple Disease · Tropical Sprue · Lactase Deficiency) · 3.4 Appendicitis · 3.5 Carcinoid Tumor · 3.6 Anorectal Disorders","uw":40,"an":50,"dv":"Ep 384 (IBDs)"},
  "2026-09-07":{"s":"Biochem","bc":"Ch 1-3: Cell Biology · Lysosomal Storage Diseases · Connective Tissue","h":8,"type":"normal","fa":"FA Biochem pp 60-72 (cell cycle, lysosomal, collagen)","p":null,"sk":"Path: 1.1 Lysosomal Storage Diseases — Gaucher · Niemann-Pick · Fabry · Tay-Sachs · Hurler (MPS I) · Hunter (MPS II) · Pompe (GSD II)","uw":40,"an":50,"dv":"Ep 56 (Cell Bio 1)"},
  "2026-09-08":{"s":"Biochem","bc":"Ch 4-6: Energy Production · Carbohydrates · One Carbon Metabolism","h":8,"type":"normal","fa":"FA Biochem pp 73-85 (glycolysis, TCA, gluconeogenesis, folate)","p":null,"sk":null,"uw":40,"an":50,"dv":"Ep 13 (Metabolism)"},
  "2026-09-09":{"s":"Biochem","bc":"Ch 7-10: Oxidative Stress · Glycogen · Lipid Metabolism · Protein Metabolism","h":8,"type":"normal","fa":"FA Biochem pp 86-95 (glycogen storage, FA metabolism, urea cycle)","p":null,"sk":"Path: 1.2 Glycogen Storage Diseases (Von Gierke GSD Ia · Pompe GSD II · Cori GSD III · McArdle GSD V) · 1.3 Familial Hypercholesterolemia","uw":40,"an":50,"dv":"Ep 11 (Glycogen)"},
  "2026-09-10":{"s":"Biochem","bc":"Ch 11-12: Porphyrias · Vitamins — complete vitamin + mineral pathology","h":8,"type":"normal","fa":"FA Biochem pp 96-118 (vitamins, minerals, porphyrias)","p":null,"sk":"Path: 1.4 Vitamin Deficiencies — A (night blindness) · C (scurvy) · D (rickets) · E · K | B vitamins: B1/Thiamine · B3/Niacin · B6 · B12 · Folate · 1.5 Porphyrias (AIP · Porphyria Cutanea Tarda · Lead Poisoning effects on heme)","uw":40,"an":50,"dv":"Ep 243 (Water Vitamins)"},
  "2026-09-11":{"s":"MSK","bc":"Ch 1-3: Skeletal Muscle · Non-Rheumatologic Diseases · Rheumatologic Diseases","h":8,"type":"normal","fa":"FA MSK pp 458-468 (muscle, OA, RA, gout, pseudogout)","p":"Pathoma Ch 18: MSK","sk":"Path: 1.1 Osteoarthritis vs RA · 1.2 Gout & Pseudogout · 1.3 SLE & Sjogren's Syndrome · 2.1 Polymyalgia Rheumatica · 2.2 Fibromyalgia","uw":40,"an":50,"dv":"Ep 99 (Rheum 1)"},
  "2026-09-12":{"s":"REST","bc":"Anki — Biochem + MSK. Review metabolic pathway diagrams.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-13":{"s":"MSK","bc":"Ch 4-6: Seronegative Spondyloarthritis · Primary Bone Tumors · Vasculitides","h":8,"type":"normal","fa":"FA MSK pp 469-476 (AS, psoriatic, bone tumors, vasculitis)","p":"Pathoma Ch 18 cont","sk":"Path: 3.1 Seroneg SpA (AS · PsA · Reactive Arthritis · IBD-associated) · 3.2 Dermatomyositis & Polymyositis · 4.1 Bone Tumors (Osteosarcoma · Ewing's · GCT · Chondrosarcoma) · 4.2 Osteoporosis & Osteomalacia · 4.3 Paget Disease of Bone · 5.1 Vasculitis by vessel size","uw":40,"an":50,"dv":"Ep 269 (Bone Tumors)"},
  "2026-09-14":{"s":"MSK","bc":"Ch 7-15: Spine · Brachial Plexus · Upper & Lower Extremity · Childhood MSK · Pharm","h":8,"type":"normal","fa":"FA MSK pp 477-end (nerve injuries, anatomy, pharm)","p":null,"sk":"Pharm: 1.4 NSAIDs & COX-2 Inhibitors · 1.5 Colchicine · 1.6 Allopurinol & Febuxostat | 1.2 DMARDs (MTX, HCQ, Sulfasalazine, Leflunomide) · 1.3 Biologics (TNF-alpha, IL-6, B-cell inhibitors)","uw":40,"an":50,"dv":"Ep 305 (Upper Limb)"},
  "2026-09-15":{"s":"NBME","bc":"🎯 NBME Form 26 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme","fa":"FA — error-driven review","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-16":{"s":"Review","bc":"NBME 26 error review — deep dive on every wrong answer. Re-read FA sections. Update weak list.","h":8,"type":"normal","fa":"FA — error-driven sections","p":null,"sk":null,"uw":40,"an":0,"dv":"Ep 184 (NBME Weird Questions)"},
  "2026-09-17":{"s":"Micro","bc":"Sketchy: Gram+ Cocci — S. aureus, S. pyogenes, S. pneumoniae, Enterococcus","h":8,"type":"normal","fa":"FA Micro pp 124-138 (Gram+ cocci, toxins, infections)","p":null,"sk":"Micro Bacteria: 1.1 S. aureus · 1.2 S. pyogenes · 1.3 S. pneumoniae · 1.4 S. viridans · 1.5 S. agalactiae · 1.6 Enterococci · 1.7 MRSA & Staph epi","uw":50,"an":50,"dv":"Ep 77 (Gram Positive)"},
  "2026-09-18":{"s":"Micro","bc":"Sketchy: Gram+ Rods — Clostridium · Bacillus · Listeria · Corynebacterium · Mycobacteria (TB, leprosy, MAC)","h":8,"type":"normal","fa":"FA Micro pp 139-152 (Gram+ rods, TB serology, treatment)","p":null,"sk":"Micro Bacteria: 2.1 C. botulinum · 2.2 C. tetani · 2.3 C. perfringens · 2.4 C. difficile · 2.5 B. anthracis · 2.6 B. cereus · 2.7 Listeria · 2.8 Corynebacterium diphtheriae · 2.9 Actinomyces · 2.10 Nocardia · 8.1 M. tuberculosis · 8.2 MAC · 8.3 M. leprae","uw":50,"an":50,"dv":"Ep 262 (Tuberculosis)"},
  "2026-09-19":{"s":"REST","bc":"Anki — Micro Bacteria. Flip Sketchy images from memory.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-20":{"s":"Micro","bc":"Sketchy: Gram− — Neisseria, H. flu, Pseudomonas, E. coli, Klebsiella, Salmonella, Shigella, Campylobacter, H. pylori","h":8,"type":"normal","fa":"FA Micro pp 153-165 (Gram− bacteria, GI pathogens)","p":null,"sk":"Micro Bacteria: 3.1 N. gonorrhoeae · 3.2 N. meningitidis · 3.3 H. influenzae · 3.4 Bordetella · 4.1 E. coli · 4.2 Klebsiella · 4.3 Pseudomonas · 4.4 Salmonella · 4.5 H. pylori · 5.1 V. cholerae · 5.2 Campylobacter · 5.3 Shigella · 5.4 Yersinia","uw":50,"an":50,"dv":"Ep 78 (Gram Negative)"},
  "2026-09-21":{"s":"Micro","bc":"Sketchy: Atypicals (Mycoplasma, Chlamydia, Rickettsia) · Spirochetes (Treponema, Borrelia, Leptospira)","h":8,"type":"normal","fa":"FA Micro pp 166-176 (atypicals, spirochetes, STIs)","p":null,"sk":"Micro Bacteria: 5.5 Brucella · 5.6 Francisella · 6.1 Treponema pallidum · 6.2 Borrelia burgdorferi · 6.3 Legionella · 6.4 Leptospira · 7.1 Chlamydia trachomatis · 7.2 Chlamydophila pneumoniae · 9.1 R. rickettsii · 9.2 R. typhi · 10.4 Mycoplasma · 10.6 R. prowazekii","uw":50,"an":50,"dv":"Ep 201 (Micro 1)"},
  "2026-09-22":{"s":"Micro","bc":"Sketchy: Fungi — Candida, Aspergillus, Cryptococcus, dimorphic fungi, Mucor, Pneumocystis","h":8,"type":"normal","fa":"FA Micro pp 177-184 (fungi, antifungal targets)","p":null,"sk":"Micro Fungi: 1.1 Aspergillus · 1.2 Blastomycosis · 1.3 Coccidioidomycosis · 1.4 Histoplasmosis · 2.1 Pneumocystis jirovecii · 2.2 Dermatophytes · 3.1 Candida albicans · 3.2 Mucormycosis · 3.3 Cryptococcus · 3.4 Sporothrix","uw":60,"an":40,"dv":"Ep 205 (Micro 2)"},
  "2026-09-23":{"s":"Micro","bc":"Sketchy: DNA Viruses — Herpes family (HSV/VZV/EBV/CMV), Adenovirus, Parvovirus, HPV, HBV, Poxvirus","h":8,"type":"normal","fa":"FA Micro pp 185-194 (DNA viruses, serology)","p":null,"sk":"Micro Viruses: 1.1 HSV · 1.2 VZV · 1.3 EBV · 1.4 CMV · 1.5 HHV-6 · 1.6 HHV-8 · 1.7 Flavivirus · 3.1 Parvovirus B19 · 3.2 Adenovirus · 3.3 HPV","uw":60,"an":40,"dv":"Ep 2 (Viruses)"},
  "2026-09-24":{"s":"Micro","bc":"Sketchy: RNA Viruses — Influenza, Measles, Mumps, Rubella, Rabies, Picornaviruses, Rotavirus, Hepatitis A-E","h":8,"type":"normal","fa":"FA Micro pp 195-202 (RNA viruses)","p":null,"sk":"Micro Viruses: 2.1 Influenza · 2.2 Paramyxovirus · 2.3 Rhabdovirus · 2.4 Coronavirus · 4.1 Hep A · 4.2 Hep B · 4.3 Hep C · 4.4 Hep D · 4.5 Hep E · 5.1 Poliovirus · 5.2 Coxsackievirus · 5.3 Rhinovirus · 6.1 Rotavirus · 6.2 Norovirus","uw":60,"an":40,"dv":"Ep 3 (Viruses)"},
  "2026-09-25":{"s":"Micro","bc":"Sketchy: HIV/AIDS — lifecycle, CD4 thresholds & OIs, HAART · Parasites (Protozoa)","h":8,"type":"normal","fa":"FA Micro pp 203-218 (HIV, AIDS complications, protozoa)","p":null,"sk":"Micro Viruses: 7.1 HIV/AIDS — lifecycle, CD4 thresholds, opportunistic infections, HAART classes | Micro Parasites: 1.1 Giardia · 1.2 Entamoeba histolytica · 1.3 Cryptosporidium · 1.4 Naegleria fowleri · 1.5 Acanthamoeba · 2.1 Toxoplasma gondii · 2.2 Plasmodium · 2.3 Babesia · 3.1 T. brucei · 3.2 T. cruzi · 3.3 Leishmania","uw":60,"an":40,"dv":"Ep 218 (Micro 3)"},
  "2026-09-26":{"s":"REST","bc":"Anki — Micro Fungi/Viruses/Parasites. HIV CD4 thresholds from memory.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-27":{"s":"Micro","bc":"Sketchy: Helminths (Ascaris, hookworm, Strongyloides, tapeworms, Schistosoma) · Ectoparasites + Micro UWorld 60 Qs timed","h":8,"type":"normal","fa":"FA Micro pp 219-226 (helminths, ectoparasites)","p":null,"sk":"Micro Parasites: 4.1 Ascaris · 4.2 Hookworm · 4.3 Strongyloides · 5.1 Schistosoma · 5.2 Clonorchis sinensis · 5.3 Taenia · 6.1 Cestodes · 6.2 Trichinella · 6.3 Trichomonas · 6.4 Enterobius","uw":60,"an":40,"dv":"Ep 252 (PEP/HIV prophylaxis)"},
  "2026-09-28":{"s":"Pharm","bc":"Sketchy: Antibiotics — cell wall inhibitors (PCN, cephalosporins, vancomycin, carbapenems) + protein synthesis + other","h":8,"type":"normal","fa":"FA Micro pp 227-238 (antimicrobials, mechanisms, resistance)","p":null,"sk":"Pharm Antimicrobials: 1.1 Penicillin · 1.2 Aminopenicillins · 1.3 Antistaphylococcal PCN · 1.4 Cephalosporins · 1.5 Carbapenems & Aztreonam · 1.6 Vancomycin · 1.7 Daptomycin · 2.1 Tetracyclines · 2.2 Macrolides · 2.3 Clindamycin · 2.4 Chloramphenicol · 2.5 Linezolid · 3.1 Aminoglycosides · 3.2 Sulfonamides & TMP · 4.1 Nitrofurantoin · 4.2 Fluoroquinolones · 4.3 Metronidazole","uw":60,"an":30,"dv":"Ep 460 (Antibiotics 1)"},
  "2026-09-29":{"s":"NBME","bc":"🎯 NBME Form 28 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme","fa":"FA — error-driven review","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-09-30":{"s":"Review","bc":"NBME 28 comprehensive error review. Identify top 3 remaining weak subjects. Update FA annotations.","h":8,"type":"normal","fa":"FA — error sections","p":null,"sk":null,"uw":50,"an":0,"dv":"Ep 433 (Drug Reactions 2)"},
  "2026-10-01":{"s":"Pharm","bc":"Sketchy: Antifungals + Antiparasitic + Antivirals (NRTIs, NNRTIs, PIs, integrase inhibitors, neuraminidase inhibitors)","h":8,"type":"normal","fa":"FA Pharm pp 196-205 (antifungals, antivirals, HIV pharm)","p":null,"sk":"Pharm Antimicrobials: 5.1 Amphotericin B · 5.2 Azoles · 5.3 Echinocandins · 6.1 NRTIs · 6.2 NNRTIs · 6.3 Protease Inhibitors · 6.4 Integrase Inhibitors · 6.5 Fusion/Entry Inhibitors · 7.1 Neuraminidase Inhibitors · 7.2 Antiherpes Drugs","uw":60,"an":30,"dv":"Ep 461 (Antibiotics 2)"},
  "2026-10-02":{"s":"Pharm","bc":"Sketchy: Cardiovascular drugs — antihypertensives, antiarrhythmics (Vaughan-Williams I-IV), HF drugs, anticoagulants","h":8,"type":"normal","fa":"FA Pharm pp 206-218 (cardio pharm, anticoagulants)","p":null,"sk":"Pharm Autonomic: 2.4 Indirect Sympathomimetics | CV & Renal: 1.1 ACE/ARBs · 1.2 CCBs · 1.3 Nitrates · 1.4 Antiarrhythmics I · 1.5 Antiarrhythmics II-IV · 1.6 Digoxin · 2.1 Thiazides · 2.2 Loop Diuretics · 2.3 K-sparing · 3.1 Heparin/LMWH · 3.2 Warfarin · 3.3 DOACs · 3.4 Thrombolytics · 4.1 Statins","uw":60,"an":30,"dv":"Ep 55 (Cardio Pharm)"},
  "2026-10-03":{"s":"REST","bc":"Anki — Pharm integration. Review P450 table and drug SEs.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-04":{"s":"Pharm","bc":"Sketchy: CNS drugs — antidepressants · antipsychotics · anticonvulsants · Parkinson/Alzheimer · opioids · anesthetics","h":8,"type":"normal","fa":"FA Pharm pp 219-230 (psychopharm, neuro drugs)","p":null,"sk":"Pharm Neuro/Psych: 1.1 General Anesthetics · 1.2 Local Anesthetics · 1.3 Opioids · 1.4 NSAIDs · 2.1 AEDs (Na) · 2.2 AEDs (GABA) · 2.3 AEDs (Other) · 3.1 Parkinson Drugs · 3.2 Alzheimer Drugs · 4.1 Typical Antipsychotics · 4.2 Atypical Antipsychotics · 5.1 SSRIs/SNRIs · 5.2 TCAs · 5.3 MAOIs · 5.4 Mood Stabilizers · 6.1 Benzos · 6.2 Barbiturates · 6.3 Buspirone & Z-drugs","uw":60,"an":30,"dv":"Ep 20 (Psych Pharm)"},
  "2026-10-05":{"s":"Pharm","bc":"Sketchy: GI + Pulm + Endo + Renal + Antineoplastic drugs","h":8,"type":"normal","fa":"FA Pharm pp 231-end (all remaining pharm classes)","p":null,"sk":"Pharm GI/Endo: 1.1 H2 Blockers/PPIs · 1.2 GI Motility · 1.3 Antiemetics · 2.1 Insulin · 2.2 Oral Hypoglycemics · 3.1 Thyroid Drugs · 3.2 Corticosteroids · 3.3 Sex Hormones | Antineoplastics: 1.1 Alkylating · 1.2 Antimetabolites · 1.3 Topoisomerase · 1.4 Antitumor Antibiotics · 1.5 Microtubule · 2.1 TKIs · 2.2 mAbs · 2.3 Hormonal | Blood/Inflam: 1.1 Corticosteroids · 1.2 DMARDs · 1.3 Biologics (TNF-α) · 2.1 Antihistamines · 2.2 Leukotrienes · 2.3 Epinephrine | Smooth Muscle: 1.1 Bronchodilators · 1.2 Methylxanthines · 1.3 Uterotonic · 1.4 Tocolytics","uw":60,"an":30,"dv":"Ep 432 (Pharm Blitz)"},
  "2026-10-06":{"s":"Dedicated","bc":"Weak area #1 (from NBME list) — Pathoma/Bootcamp rewatch + 60 targeted UWorld Qs in subject","h":8,"type":"normal","fa":"FA — weak subject 1","p":"Pathoma weak chapter","sk":null,"uw":60,"an":0,"dv":"Ep 84 (Rapid Review 1)"},
  "2026-10-07":{"s":"Dedicated","bc":"Weak area #2 — same protocol: content review + 60 UWorld questions + full explanations","h":8,"type":"normal","fa":"FA — weak subject 2","p":null,"sk":null,"uw":60,"an":0,"dv":"Ep 90 (Rapid Review 2)"},
  "2026-10-08":{"s":"Dedicated","bc":"Weak area #3 — content review + UWorld block + annotate FA on every error","h":8,"type":"normal","fa":"FA — weak subject 3","p":null,"sk":null,"uw":60,"an":0,"dv":"Ep 92 (Rapid Review 3)"},
  "2026-10-09":{"s":"Free 120","bc":"🎯 NBME Free 120 (2022 version) — full timed, exam conditions. Treat like the real thing. Full review.","h":8,"type":"nbme","fa":"FA — error sections","p":null,"sk":null,"uw":0,"an":0,"dv":"Skip today"},
  "2026-10-10":{"s":"REST","bc":"Full rest. No studying. Walk, eat well, sleep. You have earned it.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-11":{"s":"Review","bc":"Free 120 (2022) error review — annotate every wrong answer. Note any repeated NBME weak spots.","h":8,"type":"normal","fa":"FA — error sections","p":null,"sk":null,"uw":40,"an":0,"dv":"Ep 96 (Rapid Review 5)"},
  "2026-10-12":{"s":"Rapid FA","bc":"First Aid rapid pass: Biochem → Genetics → Immunology — speed read, HY tables only, mark any gaps","h":8,"type":"normal","fa":"FA: Biochem + Genetics + Immuno","p":null,"sk":null,"uw":50,"an":0,"dv":"Ep 117 (Rapid Review Repro)"},
  "2026-10-13":{"s":"Rapid FA","bc":"First Aid rapid pass: Cardio → Pulm → Renal — reinforce key tables and diagrams","h":8,"type":"normal","fa":"FA: Cardio + Pulm + Renal","p":null,"sk":null,"uw":50,"an":0,"dv":"Ep 160 (Rapid Review)"},
  "2026-10-14":{"s":"Rapid FA","bc":"First Aid rapid pass: GI → Endo → Repro","h":8,"type":"normal","fa":"FA: GI + Endo + Repro","p":null,"sk":null,"uw":50,"an":0,"dv":"Ep 168 (Rapid Review)"},
  "2026-10-15":{"s":"Rapid FA","bc":"First Aid rapid pass: Neuro + Psych → Heme + MSK + Derm → Micro + Pharm","h":8,"type":"normal","fa":"FA: Neuro/Psych/Heme/MSK/Derm/Micro/Pharm","p":null,"sk":null,"uw":50,"an":0,"dv":"Ep 500 (USMLE Rapid Review)"},
  "2026-10-16":{"s":"Free 120","bc":"🎯 NBME Free 120 (2023 version) — full timed. Compare with first Free 120 for progress.","h":8,"type":"nbme","fa":"FA — error review","p":null,"sk":null,"uw":0,"an":0,"dv":"Skip today"},
  "2026-10-17":{"s":"REST","bc":"Full rest. No new content. Tomorrow: NBME 30.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-18":{"s":"Final","bc":"Free 120 (2023) error review + Pathoma Ch 1-4 rewatch at 2x — Cell Injury, Inflammation, Hemodynamics, Neoplasia.","h":8,"type":"normal","fa":"FA Pathology sections","p":"Pathoma Ch 1-4 at 2x speed","sk":null,"uw":40,"an":0,"dv":"Ep 101 (Rapid Review 6)"},
  "2026-10-19":{"s":"Final","bc":"Sketchy Micro rapid image recall — flip through all bacteria + fungi + virus images. Name from memory.","h":8,"type":"normal","fa":"Sketchy all images (rapid)","p":null,"sk":"Rapid recall: All Micro Bacteria (42) · Viruses (25) · Fungi (10) · Parasites (19) — name from image","uw":40,"an":0,"dv":"Ep 105 (Rapid Review 7)"},
  "2026-10-20":{"s":"Final","bc":"UWorld redo — all marked/incorrect questions from entire prep. These are your personal weak spots.","h":8,"type":"normal","fa":"FA — spot review on redos","p":null,"sk":null,"uw":80,"an":0,"dv":"Ep 498 (Successful Dedicated 1)"},
  "2026-10-21":{"s":"NBME","bc":"🎯 NBME Form 30 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme","fa":"FA — error-driven review","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-22":{"s":"Review","bc":"NBME 30 error review — exhaustive. Note any topic appearing in multiple NBMEs (guaranteed on exam).","h":8,"type":"normal","fa":"FA — error sections","p":null,"sk":null,"uw":40,"an":0,"dv":"Ep 107 (Rapid Review GI)"},
  "2026-10-23":{"s":"Final","bc":"FA — HY tables, drug side effects, microbe presentations, key formulas. No deep reading. Skim and reinforce.","h":6,"type":"normal","fa":"FA: HY tables only","p":null,"sk":null,"uw":0,"an":0,"dv":"Ep 499 (Successful Dedicated 2)"},
  "2026-10-24":{"s":"REST","bc":"Full rest. No studying. Confirm test center, bring valid ID, plan snacks.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-25":{"s":"Final","bc":"No new content. Anki reviews only. Pack bag. Confirm test center, bring valid ID, plan snacks. Sleep by 9pm.","h":3,"type":"rest","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null},
  "2026-10-26":{"s":"EXAM","bc":"🎯 USMLE STEP 1 — EXAM DAY. Trust your preparation. You are ready.","h":0,"type":"exam","fa":"—","p":null,"sk":null,"uw":0,"an":0,"dv":null}
}

const COLORS = {
  "Cardio":"#ef4444","Pulm":"#f97316","Renal":"#3b82f6","Neuro":"#8b5cf6",
  "Repro":"#ec4899","Immuno":"#10b981","Pharm":"#06b6d4","Psych":"#f59e0b",
  "Genetics":"#6366f1","Heme":"#dc2626","Derm":"#84cc16","Biostat":"#64748b",
  "Endo":"#fb923c","GI":"#22c55e","Biochem":"#a855f7","MSK":"#14b8a6",
  "Micro":"#f43f5e","Public Health":"#0ea5e9","Dedicated":"#6366f1",
  "NBME":"#ef4444","Free 120":"#ef4444","Rapid FA":"#f59e0b",
  "Review":"#94a3b8","Final":"#6366f1","REST":"#475569","Light Prep":"#475569",
  "EXAM":"#ef4444"
}

const ICONS = {
  "Cardio":"❤️","Pulm":"🫁","Renal":"🫘","Neuro":"🧠","Repro":"🧬",
  "Immuno":"🛡️","Pharm":"💊","Psych":"💭","Genetics":"🔬","Heme":"🩸",
  "Derm":"🔭","Biostat":"📊","Endo":"⚗️","GI":"🫃","Biochem":"🧪",
  "MSK":"🦴","Micro":"🦠","Public Health":"🏥","Dedicated":"📚",
  "NBME":"🎯","Free 120":"🎯","Rapid FA":"📖","Review":"🔄",
  "Final":"⭐","REST":"😴","Light Prep":"🌙","EXAM":"🏆"
}

function localISO() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`
}

function daysLeft() {
  const exam = new Date(EXAM_ISO)
  const now = new Date(); now.setHours(0,0,0,0)
  return Math.max(0, Math.round((exam - now) / 86400000))
}

function addRow(widget, icon, text, color) {
  const row = widget.addStack()
  row.layoutHorizontally()
  row.centerAlignContent()
  const ic = row.addText(icon + " ")
  ic.textColor = new Color(color || "#475569")
  ic.font = Font.systemFont(12)
  const t = row.addText(text)
  t.textColor = new Color(color || "#94a3b8")
  t.font = Font.systemFont(12)
  t.lineLimit = 2
  widget.addSpacer(4)
}

// ── BUILD WIDGET ─────────────────────────────────────────────────────
const iso = localISO()
const day = SCHEDULE[iso]

const w = new ListWidget()
w.url = APP_URL + "#" + iso   // deep link to today's date
w.backgroundColor = new Color("#0f172a")
w.setPadding(14, 14, 12, 14)

if (!day) {
  const t = w.addText("📚 Step 1")
  t.textColor = Color.white()
  t.font = Font.boldSystemFont(15)
  w.addSpacer(6)
  const s = w.addText("No entry for today\nTap to open app →")
  s.textColor = new Color("#64748b")
  s.font = Font.systemFont(13)
} else {
  const accent = new Color(COLORS[day.s] || "#6366f1")
  const isRest = day.type === "rest"
  const isExam = day.type === "exam"

  // ── Row 1: subject chip + countdown
  const header = w.addStack()
  header.layoutHorizontally()
  header.centerAlignContent()

  const chip = header.addStack()
  chip.backgroundColor = accent
  chip.cornerRadius = 5
  chip.setPadding(3, 8, 3, 8)
  const icon = ICONS[day.s] || "📋"
  const chipTxt = chip.addText(icon + " " + day.s.toUpperCase())
  chipTxt.textColor = Color.white()
  chipTxt.font = Font.boldSystemFont(10)

  header.addSpacer()

  const dl = daysLeft()
  const cdTxt = header.addText(`${dl}d to exam`)
  cdTxt.textColor = new Color("#475569")
  cdTxt.font = Font.systemFont(10)

  w.addSpacer(7)

  // ── Row 2: icon + date
  const dateRow = w.addStack()
  dateRow.layoutHorizontally()
  dateRow.centerAlignContent()

  const bigIcon = dateRow.addText(ICONS[day.s] || "📋")
  bigIcon.font = Font.systemFont(22)

  dateRow.addSpacer(8)

  const dateCol = dateRow.addStack()
  dateCol.layoutVertically()
  const dateObj = new Date(iso + "T12:00:00Z")
  const dateLabel = dateObj.toLocaleDateString("en-US", {
    weekday:"short", month:"short", day:"numeric", timeZone:"UTC"
  })
  const dateTxt = dateCol.addText(dateLabel)
  dateTxt.textColor = new Color("#94a3b8")
  dateTxt.font = Font.mediumSystemFont(11)

  w.addSpacer(6)

  // ── Row 3: main BC task
  const isSmall = config.widgetFamily === "small"
  const bcMax = isSmall ? 70 : 120
  const bc = day.bc.length > bcMax ? day.bc.slice(0, bcMax - 1) + "…" : day.bc
  const bcTxt = w.addText(bc)
  bcTxt.textColor = isRest || isExam ? new Color("#94a3b8") : Color.white()
  bcTxt.font = Font.semiboldSystemFont(isSmall ? 13 : 15)
  bcTxt.lineLimit = 3

  if (!isSmall && !isRest) {
    w.addSpacer(8)

    // ── Subtask rows
    if (day.fa) {
      addRow(w, "📖", day.fa, "#60a5fa")
    }
    if (day.p) {
      addRow(w, "🫀", day.p, "#f97316")
    }
    if (day.sk) {
      addRow(w, "🎨", day.sk, "#a855f7")
    }
    if (day.uw && day.uw > 0) {
      const uwAnki = day.an && day.an > 0
        ? `UWorld: ${day.uw} Qs  ·  Anki: ${day.an} cards`
        : `UWorld: ${day.uw} questions`
      addRow(w, "❓", uwAnki, "#10b981")
    } else if (day.an && day.an > 0) {
      addRow(w, "🃏", `Anki: ${day.an} cards`, "#10b981")
    }
    if (day.dv && day.dv !== "Skip today") {
      addRow(w, "🎬", "Divine Intervention " + day.dv, "#64748b")
    }
  }

  // ── Upcoming days (fills empty space on large widget)
  if (!isSmall) {
    const allKeys = Object.keys(SCHEDULE)
    const todayIdx = allKeys.indexOf(iso)
    if (todayIdx >= 0) {
      // Find next 3 non-today entries
      const upcoming = []
      for (let i = 1; i <= 6 && upcoming.length < 3; i++) {
        const k = allKeys[todayIdx + i]
        if (k) upcoming.push([k, SCHEDULE[k]])
      }
      if (upcoming.length > 0) {
        w.addSpacer(8)
        const upHdr = w.addStack()
        const upLabel = upHdr.addText("UPCOMING")
        upLabel.textColor = new Color("#1e3a5f")
        upLabel.font = Font.boldSystemFont(9)
        w.addSpacer(4)

        for (const [k, nd] of upcoming) {
          const ndObj = new Date(k + "T12:00:00Z")
          const ndLabel = ndObj.toLocaleDateString("en-US", {
            weekday:"short", month:"short", day:"numeric", timeZone:"UTC"
          })
          const row = w.addStack()
          row.layoutHorizontally()
          row.centerAlignContent()

          const dl = row.addText(ndLabel)
          dl.textColor = new Color("#334155")
          dl.font = Font.systemFont(11)
          dl.minimumScaleFactor = 0.8

          row.addSpacer(6)

          const subj = row.addStack()
          subj.backgroundColor = new Color(COLORS[nd.s] || "#6366f1")
          subj.cornerRadius = 3
          subj.setPadding(1, 5, 1, 5)
          const subjTxt = subj.addText(nd.s)
          subjTxt.textColor = Color.white()
          subjTxt.font = Font.boldSystemFont(9)

          row.addSpacer(6)

          const bcShort = nd.bc.length > 38 ? nd.bc.slice(0, 37) + "…" : nd.bc
          const bct = row.addText(bcShort)
          bct.textColor = new Color("#334155")
          bct.font = Font.systemFont(10)
          bct.lineLimit = 1

          row.addSpacer()
          w.addSpacer(4)
        }
      }
    }
  }

  w.addSpacer()

  // ── Footer: hours + tap hint
  const footer = w.addStack()
  footer.layoutHorizontally()
  if (day.h > 0) {
    const hrTxt = footer.addText(`⏱ ${day.h}h`)
    hrTxt.textColor = new Color("#334155")
    hrTxt.font = Font.systemFont(10)
  }
  footer.addSpacer()
  const hint = footer.addText("open app →")
  hint.textColor = new Color("#334155")
  hint.font = Font.systemFont(10)
}

Script.setWidget(w)

if (!config.runsInWidget) {
  Safari.open(APP_URL + "#" + iso)
}

Script.complete()
