// Step 1 Schedule — Scriptable Widget
// Paste into Scriptable → long-press home → add Scriptable widget → pick this script
// Tapping opens: https://step1-liart.vercel.app

const APP_URL = "https://step1-liart.vercel.app"
const EXAM_ISO = "2026-10-22"

const SCHEDULE = {
  "2026-06-20":{"s":"Cardio","bc":"Ch 1-2: Embryology & Anatomy","h":6,"type":"normal","fa":"FA Cardio pp 290-298","uw":20,"an":35,"dv":"Ep 5 (Cardio Physiology)"},
  "2026-06-21":{"s":"Cardio","bc":"Ch 3-4: Vascular System, Cardiac Parameters","h":6,"type":"normal","fa":"FA Cardio pp 299-305","p":"Pathoma Ch 1 Cell Injury (context)","uw":20,"an":35,"dv":"Ep 116 (Cardio 1)"},
  "2026-06-22":{"s":"Cardio","bc":"Ch 5-6: Cardiac Function Curves, PV Loops","h":6,"type":"normal","fa":"FA Cardio pp 306-312","uw":20,"an":35,"dv":"Ep 253 (Starling Forces)"},
  "2026-06-23":{"s":"Cardio","bc":"Ch 7-8: Vasodilation/Vasoconstriction, Pressure-Flow Physiology","h":6,"type":"normal","fa":"FA Cardio pp 313-316","uw":20,"an":35,"dv":"Ep 154 (Cardio 2)"},
  "2026-06-24":{"s":"Cardio","bc":"Ch 9: Cardiac Cycle · Ch 10: RAAS · Ch 11-12: Exercise & Conduction Physiology","h":6,"type":"normal","fa":"FA Cardio pp 317-323 (EKG, conduction)","uw":20,"an":35,"dv":"Ep 165 (Cardio 3)"},
  "2026-06-25":{"s":"Cardio","bc":"Ch 13: Antiarrhythmics · Ch 14-15: Atrial & Ventricular Arrhythmias · Ch 16: Conduction Block","h":6,"type":"normal","fa":"FA Cardio pp 324-330 (arrhythmias, drugs)","uw":20,"an":35,"dv":"Ep 477 (ACS)"},
  "2026-06-26":{"s":"REST","bc":"Anki — Cardio cards. Review EKG diagrams in FA.","h":3,"type":"rest"},
  "2026-06-27":{"s":"Cardio","bc":"Ch 17: Heart Failure · Ch 18: Cardiomyopathy","h":6,"type":"normal","fa":"FA Cardio pp 331-335","p":"Pathoma Ch 8: HF, cardiomyopathy","sk":"Path: Cardiac Hypertrophy, Heart Failure & Cardiomyopathy","uw":20,"an":35,"dv":"Ep 264 (Heart Failure)"},
  "2026-06-28":{"s":"Cardio","bc":"Ch 19: Aortic Disease · Ch 20: Valvular Disease","h":7,"type":"normal","fa":"FA Cardio pp 336-342","p":"Pathoma Ch 8 cont: valvular","sk":"Path: Endocarditis · Rheumatic Heart Disease · Valvular Disease","uw":20,"an":35,"dv":"Ep 244 (Valvular Disease)"},
  "2026-06-29":{"s":"Cardio","bc":"Ch 21-22: Acyanotic & Cyanotic Congenital Heart Defects","h":6,"type":"normal","fa":"FA Cardio pp 343-347 (congenital)","p":"Pathoma Ch 8: congenital","uw":20,"an":35,"dv":"Ep 445 (MI Complications)"},
  "2026-06-30":{"s":"Cardio","bc":"Ch 23: Stable Angina & Atherosclerosis · Ch 24: MI","h":6,"type":"normal","fa":"FA Cardio pp 348-353 (atherosclerosis, MI)","p":"Pathoma Ch 7: Vascular","sk":"Path: Myocardial Ischemia · Atherosclerosis · Stable Angina","uw":20,"an":35,"dv":"Ep 233 (Shock)"},
  "2026-07-01":{"s":"Cardio","bc":"Ch 25: Peripheral Arterial/Venous Disease · Ch 26: HTN · Ch 27-28: Pericardial Disease & Shock","h":7,"type":"normal","fa":"FA Cardio pp 354-end (HTN, pericardium, shock)","sk":"Path: Myocarditis · Hypertensive Heart Disease · Pericarditis","uw":20,"an":35,"dv":"Ep 232 (Vasculitis)"},
  "2026-07-02":{"s":"Pulm","bc":"Ch 1: Intro · Ch 2: Air Physiology · Ch 3: Blood Physiology","h":6,"type":"normal","fa":"FA Pulm pp 656-668 (anatomy, lung volumes, gas exchange)","uw":20,"an":35,"dv":"Ep 66 (Pulm Pharm)"},
  "2026-07-03":{"s":"REST","bc":"Anki — Cardio + Pulm intro. Review cardiac cycle diagrams.","h":3,"type":"rest"},
  "2026-07-04":{"s":"Pulm","bc":"Ch 4: Lung Path Fundamentals · Ch 5: Obstructive Lung Disease","h":6,"type":"normal","fa":"FA Pulm pp 669-678 (COPD, asthma, bronchiectasis)","p":"Pathoma Ch 9: Pulm obstructive","sk":"Path: COPD · Asthma · Bronchiectasis","uw":20,"an":35,"dv":"Ep 392 (Pulm Path 1)"},
  "2026-07-05":{"s":"Pulm","bc":"Ch 6-7: Restrictive Lung Disease & Lung Cancer · Ch 8: Special Topics (PE, ARDS, Pulm HTN)","h":7,"type":"normal","fa":"FA Pulm pp 679-end (restrictive, cancer, ARDS)","p":"Pathoma Ch 9 cont","sk":"Path: Idiopathic Pulmonary Fibrosis · DVT & Pulmonary Embolism","uw":20,"an":35,"dv":"Ep 286 (ARDS)"},
  "2026-07-06":{"s":"Renal","bc":"Ch 1-2: Anatomy & Embryology, Fluid & Filtration","h":6,"type":"normal","fa":"FA Renal pp 580-590 (anatomy, GFR, clearance)","uw":20,"an":35,"dv":"Ep 52 (Renal 1)"},
  "2026-07-07":{"s":"Renal","bc":"Ch 3-4: Nephron Transporters & RAAS · Ch 5: Electrolytes","h":6,"type":"normal","fa":"FA Renal pp 591-600 (tubular function, electrolytes)","uw":20,"an":35,"dv":"Ep 53 (Renal 2)"},
  "2026-07-08":{"s":"Renal","bc":"Ch 6: Acid-Base Physiology · Ch 7-8: Path Diagnostics & Nephrotic Syndromes","h":7,"type":"normal","fa":"FA Renal pp 601-608 (acid-base, nephrotic)","p":"Pathoma Ch 12: Renal","sk":"Path: Renal AKI & Function Tests · Nephrotic Syndrome","uw":20,"an":35,"dv":"Ep 470 (Acid-Base)"},
  "2026-07-09":{"s":"Renal","bc":"Ch 9: Nephritic Syndromes · Ch 10: Nephrolithiasis · Ch 11: Urinary Incontinence · Ch 12: AKI","h":7,"type":"normal","fa":"FA Renal pp 609-end (nephritic, stones, AKI, CKD)","sk":"Path: Nephritic Syndrome (RPGN, IgA, MPGN, SLE)","uw":20,"an":35,"dv":"Ep 169 (Nephrotic/Nephritic)"},
  "2026-07-10":{"s":"REST","bc":"Anki — Pulm + Renal consolidation.","h":3,"type":"rest"},
  "2026-07-11":{"s":"Renal","bc":"Ch 13: Inflammatory Conditions & Malignancy · Ch 14: Cystic Kidney Disease · Ch 15: Pharm","h":7,"type":"normal","fa":"FA Renal pp 616-end (CKD, pharm, PKD)","p":"Pathoma Ch 12 cont","sk":"Path: Renal Cell Carcinoma · Nephroblastoma · PKD · RTA","uw":20,"an":35,"dv":"Ep 287 (Urinalysis)"},
  "2026-07-12":{"s":"Neuro","bc":"Ch 1-3: Embryology, Cellular Function & Ascending Tracts","h":6,"type":"normal","fa":"FA Neuro pp 524-538 (spinal anatomy, tracts)","uw":20,"an":35,"dv":"Ep 87 (Neuro 1)"},
  "2026-07-13":{"s":"Neuro","bc":"Ch 4-6: Descending Tracts, Brainstem Anatomy, Cerebral Cortex","h":6,"type":"normal","fa":"FA Neuro pp 539-552 (brainstem, lobes)","uw":20,"an":35,"dv":"Ep 89 (Neuro 2)"},
  "2026-07-14":{"s":"Neuro","bc":"Ch 7-9: Radiculopathy, Spinal Cord Syndromes, Invasive Spinal Cord Disease","h":6,"type":"normal","fa":"FA Neuro pp 553-562 (spinal cord lesions)","uw":20,"an":35,"dv":"Ep 371 (Spinal Cord)"},
  "2026-07-15":{"s":"Neuro","bc":"Ch 10-11: Demyelinating Disease & Conduction · Ch 12-13: NMJ, Cranial Nerves I-VI","h":6,"type":"normal","fa":"FA Neuro pp 563-575 (MS, NMJ, CN I-VI)","p":"Pathoma Ch 17: CNS (intro)","sk":"Path: Multiple Sclerosis · Myasthenia Gravis · Lambert-Eaton","uw":20,"an":35,"dv":"Ep 435 (NMJ Disorders)"},
  "2026-07-16":{"s":"Neuro","bc":"Ch 14-15: Cranial Nerves VII-XII & Vision · Ch 16-17: Auditory Sensation & Vertigo","h":6,"type":"normal","fa":"FA Neuro pp 576-588 (CN VII-XII, eye, ear)","uw":20,"an":35,"dv":"Ep 361 (Eye 1)"},
  "2026-07-17":{"s":"REST","bc":"Anki — Neuro intro cards. Review spinal cord anatomy diagrams.","h":3,"type":"rest"},
  "2026-07-18":{"s":"Neuro","bc":"Ch 18-19: Pediatric & Adult Brain Tumors","h":8,"type":"normal","fa":"FA Neuro pp 589-595 (CNS tumors)","p":"Pathoma Ch 17: CNS tumors","sk":"Path: Intracranial Hypertension · Hydrocephalus · CNS Tumors","uw":50,"an":65,"dv":"Ep 516 (Brain Tumors)"},
  "2026-07-19":{"s":"Neuro","bc":"Ch 20-21: Ischemic CVAs, Aneurysms & ICH","h":8,"type":"normal","fa":"FA Neuro pp 596-602 (stroke syndromes)","p":"Pathoma Ch 17: CVA","sk":"Path: Ischemic Stroke & Lacunar Infarcts · Hemorrhagic Stroke · SAH","uw":50,"an":65,"dv":"Ep 315 (Circle of Willis)"},
  "2026-07-20":{"s":"Neuro","bc":"Ch 22: Cerebellum & Ventricles · Ch 23-24: Diencephalon & Basal Ganglia","h":8,"type":"normal","fa":"FA Neuro pp 603-615 (cerebellum, BG, hydrocephalus)","sk":"Path: Guillain-Barré · Charcot-Marie-Tooth · NF1/NF2 · Tuberous Sclerosis","uw":50,"an":65,"dv":"Ep 133 (Neuro 3)"},
  "2026-07-21":{"s":"Neuro","bc":"Ch 25-26: Neurotransmitters in Psych Disease & Dementia","h":8,"type":"normal","fa":"FA Neuro pp 616-622 (NT, dementia, Alzheimer's, Parkinson's)","p":"Pathoma Ch 17: neurodegen","sk":"Path: Alzheimer Disease · Dementia · Parkinson · Huntington","uw":50,"an":65,"dv":"Ep 374 (Spinal Cord Lesions)"},
  "2026-07-22":{"s":"Neuro","bc":"Ch 27-28: Headache & Seizures · Ch 29: Traumatic Brain Injuries","h":8,"type":"normal","fa":"FA Neuro pp 623-end (seizures, TBI)","sk":"Pharm: AEDs — Phenytoin · Valproate · Carbamazepine · Lamotrigine · Levetiracetam · Ethosuximide","uw":50,"an":65,"dv":"Ep 372 (Headache)"},
  "2026-07-23":{"s":"Neuro","bc":"Neuro UWorld dedicated block — 60 questions timed, full review. Annotate FA on every error.","h":8,"type":"normal","fa":"FA Neuro — error review","uw":60,"an":65,"dv":"Ep 311 (CSF/Brain Imaging)"},
  "2026-07-24":{"s":"REST","bc":"Anki — Neuro full consolidation. Review cranial nerve table in FA.","h":4,"type":"rest"},
  "2026-07-25":{"s":"Repro","bc":"Ch 1: Fetal Development · Ch 2: Pregnancy","h":8,"type":"normal","fa":"FA Repro pp 612-625 (embryo, pregnancy)","sk":"Path: Obstetric Complications · Ectopic Pregnancy · Molar Pregnancy","uw":50,"an":65,"dv":"Ep 142 (Repro 1)"},
  "2026-07-26":{"s":"Repro","bc":"Ch 3: Pathology of Pregnancy","h":8,"type":"normal","fa":"FA Repro pp 626-635 (placenta, eclampsia, ectopic)","p":"Pathoma Ch 13-14: Repro","sk":"Path: Preeclampsia & Eclampsia · Placenta Previa & Abruptio Placentae","uw":50,"an":65,"dv":"Ep 338 (Fetal HR)"},
  "2026-07-27":{"s":"Repro","bc":"Ch 4: Female Pathology","h":8,"type":"normal","fa":"FA Repro pp 636-645 (ovary, uterus, cervix, breast)","p":"Pathoma Ch 14-15 cont","sk":"Path: Reproductive Hormones · PCOS · Ovarian & Uterine Tumors","uw":50,"an":65,"dv":"Ep 157 (Repro 2)"},
  "2026-07-28":{"s":"Repro","bc":"Ch 5: Male Pathology · Ch 6: Reproductive Pharmacology","h":8,"type":"normal","fa":"FA Repro pp 646-end (male repro, contraceptives)","sk":"Path: Prostate Cancer · Testicular Tumors | Pharm: Contraceptives · Estrogen/Progesterone","uw":50,"an":65,"dv":"Ep 531 (Contraceptives)"},
  "2026-07-29":{"s":"Immuno","bc":"Ch 1-2: Lymphoid Tissue, Innate Immunity · Ch 3: Inflammatory Response","h":8,"type":"normal","fa":"FA Immuno pp 96-108 (innate, complement, inflammation)","p":"Pathoma Ch 2: Inflammation","sk":"Path: Hypersensitivity Types I-IV · SLE · Sjogren's · Scleroderma","uw":50,"an":65,"dv":"Ep 136 (Immuno 1)"},
  "2026-07-30":{"s":"Immuno","bc":"Ch 4-5: Cytokines, T-cells · Ch 6-7: B-cells & Antibodies","h":8,"type":"normal","fa":"FA Immuno pp 109-115 (adaptive immunity)","sk":"Path: Rheumatoid Arthritis · Systemic Vasculitis","uw":50,"an":65,"dv":"Ep 279 (Prostaglandins)"},
  "2026-07-31":{"s":"REST","bc":"Anki — Repro + Immuno intro. Review hormone table in FA.","h":4,"type":"rest"},
  "2026-08-01":{"s":"Immuno","bc":"Ch 8: Complement · Ch 9: Vaccinations · Ch 10: Immunodeficiency Syndromes","h":8,"type":"normal","fa":"FA Immuno pp 116-120 (complement, immunodef)","sk":"Path: Primary Immunodeficiency (SCID · Bruton's · DiGeorge · CVID · Wiskott-Aldrich)","uw":50,"an":65,"dv":"Ep 173 (Immunodeficiency)"},
  "2026-08-02":{"s":"Immuno","bc":"Ch 11: Hypersensitivity · Ch 12: Transfusion Reactions · Ch 13: Transplant Rejection","h":8,"type":"normal","fa":"FA Immuno pp 121-end (HSR types I-IV, transplant)","sk":"Path: Transplant Rejection · Transfusion Reactions · Blood Group Antigens","uw":50,"an":65,"dv":"Ep 323 (Immunocompromised)"},
  "2026-08-03":{"s":"Pharm","bc":"Ch 1: Pharmacodynamics · Ch 2: Pharmacokinetics","h":8,"type":"normal","fa":"FA Pharm pp 230-240 (PK/PD, dose-response, half-life)","sk":"Pharm: GPCR · Tyrosine Kinase Receptors · Nuclear Receptors · Dose-Response Curves","uw":50,"an":65,"dv":"Ep 471 (Receptors 1)"},
  "2026-08-04":{"s":"Pharm","bc":"Ch 3: Autonomic System","h":8,"type":"normal","fa":"FA Pharm pp 241-248 (ANS, cholinergics, adrenergics)","sk":"Pharm Autonomic: Cholinomimetics · Anticholinesterases · Muscarinic Antagonists · Adrenergic Agonists · Alpha/Beta Blockers","uw":50,"an":65,"dv":"Ep 18 (ANS Pharm)"},
  "2026-08-05":{"s":"Pharm","bc":"Ch 4: Side Effects & Toxins — comprehensive pharmacology toxicology","h":8,"type":"normal","fa":"FA Pharm pp 249-end (toxidromes, SE mnemonics)","sk":"Pharm: Drug-Induced Toxicity (SIADH, SJS, agranulocytosis) · Key Drug Side Effects by Class","uw":50,"an":65,"dv":"Ep 387 (Drug Reactions 1)"},
  "2026-08-06":{"s":"NBME","bc":"🎯 NBME Form 25 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme"},
  "2026-08-07":{"s":"REST","bc":"NBME 25 error review — annotate every wrong answer in FA. Identify top 3 weak subjects.","h":4,"type":"rest"},
  "2026-08-08":{"s":"Psych","bc":"Ch 1-2: Psychology & Developmental Disorders","h":8,"type":"normal","fa":"FA Psych pp 542-552 (development, Erikson, Piaget)","sk":"Pharm: Mood Stabilizers (Lithium, Valproate, Lamotrigine) · Buspirone & Non-Benzo Anxiolytics","uw":50,"an":65,"dv":"Ep 229 (Psych 1)"},
  "2026-08-09":{"s":"Psych","bc":"Ch 3-5: Memory, Dissociation, Anxiety, Trauma & Personality Disorders","h":8,"type":"normal","fa":"FA Psych pp 553-562 (anxiety, PTSD, personality)","sk":"Pharm: Benzodiazepines · Barbiturates · Buspirone · Z-drugs","uw":50,"an":65,"dv":"Ep 453 (Psych Timelines)"},
  "2026-08-10":{"s":"Psych","bc":"Ch 6: Psychosis & Mood Disorders · Ch 7: Sleep & Psychosomatic · Ch 8: Substance Misuse","h":8,"type":"normal","fa":"FA Psych pp 563-572 (schizophrenia, bipolar, MDD, substance)","sk":"Pharm: Typical Antipsychotics (Haloperidol) · Atypical Antipsychotics (Clozapine/Risperidone/Olanzapine/Quetiapine)","uw":50,"an":65,"dv":"Ep 451 (Serotonin Syndrome)"},
  "2026-08-11":{"s":"Psych","bc":"Ch 9: Psychiatry Pharmacology — full psychopharmacology deep dive","h":8,"type":"normal","fa":"FA Psych pp 573-end (antipsychotics, antidepressants, mood stabilizers)","sk":"Pharm: SSRIs/SNRIs · Tricyclic Antidepressants (TCAs) · MAOIs · Bupropion & Mirtazapine","uw":50,"an":65,"dv":"Ep 67 (Psych Pharm)"},
  "2026-08-12":{"s":"Genetics","bc":"Ch 1: DNA Structure · Ch 2: DNA Replication · Ch 3: DNA Mutations","h":8,"type":"normal","fa":"FA Biochem pp 36-46 (DNA repair, mutations, lab techniques)","sk":"Path: Chromosomal Disorders — Down, Turner, Klinefelter, Patau, Edwards","uw":50,"an":65,"dv":"Ep 138 (Genetic Diseases)"},
  "2026-08-13":{"s":"Genetics","bc":"Ch 4: Mitosis/Meiosis · Ch 5: Lab Techniques · Ch 6: Basics of Clinical Genetics · Ch 7: HY Disorders","h":8,"type":"normal","fa":"FA Biochem pp 47-58 (inheritance patterns, karyotypes)","sk":"Path: Autosomal Dominant (Marfan, NF1/NF2, Huntington, ADPKD) · Autosomal Recessive (PKU, CF, Gaucher, Wilson)","uw":50,"an":65,"dv":"Ep 424 (Inheritance Modes)"},
  "2026-08-14":{"s":"REST","bc":"Anki — Psych + Genetics. Review inheritance tables in FA.","h":4,"type":"rest"},
  "2026-08-15":{"s":"Heme","bc":"Ch 1: Embryology · Ch 2: Blood Cells · Ch 3: Microcytic Anemias","h":8,"type":"normal","fa":"FA Heme pp 384-396 (iron def, thalassemia, sideroblastic)","p":"Pathoma Ch 5: RBC","sk":"Path: Iron Deficiency Anemia · Beta-Thalassemia · Sickle Cell Disease · Sideroblastic Anemia","uw":50,"an":65,"dv":"Ep 4 (Heme)"},
  "2026-08-16":{"s":"Heme","bc":"Ch 4: Normocytic Anemias · Ch 5: Macrocytic Anemias","h":8,"type":"normal","fa":"FA Heme pp 397-405 (hemolytic, B12, folate, aplastic)","p":"Pathoma Ch 5 cont","sk":"Path: Hemolytic Anemias (G6PD, Spherocytosis, AIHA, TTP) · B12 & Folate Deficiency · Aplastic Anemia","uw":50,"an":65,"dv":"Ep 226 (Iron Labs)"},
  "2026-08-17":{"s":"Heme","bc":"Ch 6: Platelets · Ch 7: Coagulation & Fibrinolysis","h":8,"type":"normal","fa":"FA Heme pp 406-415 (platelets, VWD, hemophilia, DIC, TTP)","p":"Pathoma Ch 4: Hemostasis","sk":"Path: Hemophilia A/B & VWD · DIC & TTP/HUS · Thrombocytopenia (ITP, HIT)","uw":50,"an":65,"dv":"Ep 444 (Thrombosis)"},
  "2026-08-18":{"s":"Heme","bc":"Ch 8: Oncology & Therapeutics · Ch 9: Leukemias & Lymphomas · Ch 10: Plasma Cell Dyscrasias","h":8,"type":"normal","fa":"FA Heme pp 416-end (ALL/AML/CLL/CML, Hodgkin/NHL, MM)","p":"Pathoma Ch 3: Neoplasia + Ch 6: WBC","sk":"Path: Leukemias (ALL/AML/CLL/CML) · Lymphomas · Multiple Myeloma","uw":50,"an":65,"dv":"Ep 203 (Leukemia/Lymphoma)"},
  "2026-08-19":{"s":"Derm","bc":"Ch 1-2: General Principles & Infectious Diseases of Skin · Ch 3: Inflammatory Diseases","h":8,"type":"normal","fa":"FA Derm pp 478-490 (lesion types, psoriasis, eczema, SJS)","p":"Pathoma Ch 19: Skin","sk":"Path: Psoriasis · Atopic Dermatitis · Bullous Pemphigoid · Pemphigus Vulgaris · SJS/TEN","uw":50,"an":65,"dv":"Ep 242 (Derm 1)"},
  "2026-08-20":{"s":"Derm","bc":"Ch 4-5: Malignant Skin Disorders & Additional Disorders","h":8,"type":"normal","fa":"FA Derm pp 491-end (BCC, SCC, melanoma, pemphigus)","sk":"Path: Basal Cell Carcinoma · Squamous Cell Carcinoma · Melanoma · Actinic Keratosis","uw":50,"an":65,"dv":"Ep 246 (Derm 2)"},
  "2026-08-21":{"s":"REST","bc":"Anki — Heme + Derm. Review coagulation cascade diagram in FA.","h":4,"type":"rest"},
  "2026-08-22":{"s":"Biostat","bc":"Ch 1: Study Designs · Ch 2: Bias & Study Errors · Ch 3: Risk Quantification","h":8,"type":"normal","fa":"FA Public Health pp 256-268 (study types, bias, RR, OR)","uw":50,"an":65,"dv":"Ep 143 (Biostatistics)"},
  "2026-08-23":{"s":"Biostat","bc":"Ch 4: Diagnostic Tests · Ch 5: Statistical Distributions · Ch 6: Statistical Testing","h":8,"type":"normal","fa":"FA Public Health pp 269-280 (sensitivity/specificity, NNT, p-value)","uw":50,"an":65,"dv":"Ep 363 (Confounding)"},
  "2026-08-24":{"s":"Endo","bc":"Ch 1: Fundamentals · Ch 2: Hypothalamus · Ch 3: Anterior & Posterior Pituitary","h":8,"type":"normal","fa":"FA Endo pp 336-348 (HPA axis, pituitary hormones, SIADH, DI)","p":"Pathoma Ch 16: Endocrine","sk":"Path: Hyperpituitarism · Acromegaly · Prolactinoma · DI & SIADH","uw":50,"an":65,"dv":"Ep 514 (Endo Testing)"},
  "2026-08-25":{"s":"Endo","bc":"Ch 4: Thyroid · Ch 5: Parathyroids","h":8,"type":"normal","fa":"FA Endo pp 349-358 (thyroid path, Graves/Hashimoto, Ca2+ disorders)","sk":"Path: Thyroid Disorders — Graves · Hashimoto · Thyroid Cancer · PTH disorders","uw":50,"an":65,"dv":"Ep 251 (Thyroid)"},
  "2026-08-26":{"s":"Endo","bc":"Ch 6: Adrenal Glands · Ch 7: Pancreas (Diabetes)","h":8,"type":"normal","fa":"FA Endo pp 359-end (Cushing/Addison/Conn/pheo, DM, DKA, HHS)","p":"Pathoma Ch 16 cont","sk":"Path: Cushing · Addison · Conn · Pheochromocytoma · MEN · Diabetes","uw":50,"an":65,"dv":"Ep 301 (Diabetes 1)"},
  "2026-08-27":{"s":"Public Health","bc":"Ch 1: Ethics · Ch 2: Communication · Ch 3: Delivering Care · Ch 4: Safety · Ch 5: Practice Qs","h":8,"type":"normal","fa":"FA Public Health pp 281-end (ethics, informed consent, HIPAA)","uw":50,"an":65,"dv":"Ep 123 (Ethics)"},
  "2026-08-28":{"s":"REST","bc":"Anki — Biostat + Endo consolidation. Review MEN table in FA.","h":4,"type":"rest"},
  "2026-08-29":{"s":"GI","bc":"Ch 1: Embryology · Ch 2: Oral Cavity · Ch 3: Esophagus · Ch 4: Stomach","h":8,"type":"normal","fa":"FA GI pp 364-378 (embryo, GERD, Barrett's, PUD, gastric cancer)","p":"Pathoma Ch 10: GI upper","sk":"Path: GERD & Barrett's · PUD · Gastric Cancer · Congenital GI Defects","uw":50,"an":65,"dv":"Ep 489 (Esophagus)"},
  "2026-08-30":{"s":"GI","bc":"Ch 5: Liver · Ch 6: Biliary System · Ch 7: Pancreas","h":8,"type":"normal","fa":"FA GI pp 379-395 (hepatitis serology, cirrhosis, biliary, pancreas)","p":"Pathoma Ch 10-11: Liver/Pancreas","sk":"Path: Liver Disease & Cirrhosis · Hepatocellular Carcinoma · Cholangitis","uw":50,"an":65,"dv":"Ep 503 (LFTs)"},
  "2026-08-31":{"s":"GI","bc":"Ch 8: Small Intestine · Ch 9: Large Intestine · Ch 10: Hernias","h":8,"type":"normal","fa":"FA GI pp 396-end (malabsorption, IBD, colorectal cancer)","p":"Pathoma Ch 10 cont","sk":"Path: Crohn's Disease · Ulcerative Colitis · Colorectal Cancer · Malabsorption","uw":50,"an":65,"dv":"Ep 384 (IBDs)"},
  "2026-09-01":{"s":"Biochem","bc":"Ch 1: Cell Biology · Ch 2: Lysosomal Storage Diseases · Ch 3: Connective Tissue","h":8,"type":"normal","fa":"FA Biochem pp 60-72 (cell cycle, lysosomal, collagen)","sk":"Path: Lysosomal Storage Diseases — Gaucher · Niemann-Pick · Fabry · Tay-Sachs · Hurler · Hunter · Pompe","uw":50,"an":65,"dv":"Ep 56 (Cell Bio 1)"},
  "2026-09-02":{"s":"Biochem","bc":"Ch 4: Energy Production · Ch 5: Carbohydrates · Ch 6: One Carbon Metabolism","h":8,"type":"normal","fa":"FA Biochem pp 73-85 (glycolysis, TCA, gluconeogenesis, folate)","uw":50,"an":65,"dv":"Ep 13 (Metabolism)"},
  "2026-09-03":{"s":"Biochem","bc":"Ch 7: Oxidative Stress · Ch 8: Glycogen · Ch 9: Lipid Metabolism · Ch 10: Protein Metabolism","h":8,"type":"normal","fa":"FA Biochem pp 86-95 (glycogen storage, FA metabolism, urea cycle)","sk":"Path: Glycogen Storage Diseases (Von Gierke, Pompe, Cori, McArdle) · Familial Hypercholesterolemia","uw":50,"an":65,"dv":"Ep 11 (Glycogen)"},
  "2026-09-04":{"s":"REST","bc":"Anki — GI + Biochem. Review hepatitis serology table in FA.","h":4,"type":"rest"},
  "2026-09-05":{"s":"Biochem","bc":"Ch 11: Porphyrias · Ch 12: Vitamins — complete vitamin + mineral pathology","h":8,"type":"normal","fa":"FA Biochem pp 96-118 (vitamins, minerals, porphyrias)","sk":"Path: Vitamin Deficiencies — A, C, D, E, K, B1/Thiamine, B3/Niacin, B6, B12, Folate","uw":50,"an":65,"dv":"Ep 243 (Water Vitamins)"},
  "2026-09-06":{"s":"MSK","bc":"Ch 1: Skeletal Muscle · Ch 2: Non-Rheumatologic Diseases · Ch 3: Rheumatologic Diseases","h":8,"type":"normal","fa":"FA MSK pp 458-468 (muscle, OA, RA, gout, pseudogout)","p":"Pathoma Ch 18: MSK","sk":"Path: OA vs RA · Gout & Pseudogout · SLE & Sjogren's · Polymyalgia Rheumatica","uw":50,"an":65,"dv":"Ep 99 (Rheum 1)"},
  "2026-09-07":{"s":"MSK","bc":"Ch 4: Seronegative Spondyloarthritis · Ch 5: Primary Bone Tumors · Ch 6: Vasculitides","h":8,"type":"normal","fa":"FA MSK pp 469-476 (AS, psoriatic, bone tumors, vasculitis)","p":"Pathoma Ch 18 cont","sk":"Path: Seronegative SpA (AS, PsA, ReA) · Bone Tumors (Osteosarcoma, Ewing, GCT) · Vasculitis","uw":50,"an":65,"dv":"Ep 269 (Bone Tumors)"},
  "2026-09-08":{"s":"MSK","bc":"Ch 7: Spine · Ch 8: Brachial Plexus · Ch 9: Shoulder & Elbow · Ch 10: Wrist & Hand · Ch 11-13: Lower Extremity · Ch 14-15: Childhood MSK & Pharm","h":8,"type":"normal","fa":"FA MSK pp 477-end (nerve injuries, anatomy, pharm)","sk":"Pharm: NSAIDs & COX-2 · Colchicine · Allopurinol & Febuxostat | DMARDs: MTX/HCQ · TNF-alpha Biologics","uw":50,"an":65,"dv":"Ep 305 (Upper Limb)"},
  "2026-09-09":{"s":"NBME","bc":"🎯 NBME Form 26 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme"},
  "2026-09-10":{"s":"Review","bc":"NBME 26 error review — deep dive on every wrong answer. Re-read FA sections. Update weak list.","h":8,"type":"normal","fa":"FA — error-driven sections","uw":50,"dv":"Ep 184 (NBME Weird Questions)"},
  "2026-09-11":{"s":"REST","bc":"Anki — MSK + Biochem. Light review of weak subjects from NBME 26.","h":4,"type":"rest"},
  "2026-09-12":{"s":"Micro","bc":"Sketchy: Gram+ Cocci — S. aureus, S. pyogenes, S. pneumoniae, Enterococcus","h":8,"type":"normal","fa":"FA Micro pp 124-138 (Gram+ cocci, toxins, infections)","sk":"Micro: S. aureus · S. pyogenes · S. pneumoniae · Enterococcus · MRSA","uw":50,"an":65,"dv":"Ep 77 (Gram Positive)"},
  "2026-09-13":{"s":"Micro","bc":"Sketchy: Gram+ Rods — Bacillus, Clostridium (tetani/botulinum/difficile/perfringens), Listeria · Mycobacteria (TB, leprosy, MAC)","h":8,"type":"normal","fa":"FA Micro pp 139-152 (Gram+ rods, TB serology, treatment)","sk":"Micro: C. botulinum · C. tetani · C. diff · C. perfringens · Bacillus · Listeria · TB","uw":50,"an":65,"dv":"Ep 262 (Tuberculosis)"},
  "2026-09-14":{"s":"Micro","bc":"Sketchy: Gram− — Neisseria, H. flu, Pseudomonas, E. coli, Klebsiella, Salmonella, Shigella, Campylobacter, H. pylori","h":8,"type":"normal","fa":"FA Micro pp 153-165 (Gram− bacteria, GI pathogens)","sk":"Micro: Neisseria · H. flu · Pseudomonas · E. coli · Klebsiella · Salmonella · Shigella · H. pylori","uw":50,"an":65,"dv":"Ep 78 (Gram Negative)"},
  "2026-09-15":{"s":"Micro","bc":"Sketchy: Atypicals (Mycoplasma, Chlamydia, Rickettsia) · Spirochetes (Treponema, Borrelia, Leptospira)","h":8,"type":"normal","fa":"FA Micro pp 166-176 (atypicals, spirochetes, STIs)","sk":"Micro: Mycoplasma · Chlamydia · Rickettsia · Treponema · Borrelia · Leptospira","uw":50,"an":65,"dv":"Ep 201 (Micro 1)"},
  "2026-09-16":{"s":"Micro","bc":"Sketchy: Fungi — Candida, Aspergillus, Cryptococcus, dimorphic fungi (Histo/Blasto/Cocci), Mucor, Pneumocystis","h":8,"type":"normal","fa":"FA Micro pp 177-184 (fungi, antifungal targets)","sk":"Micro Fungi: Candida · Aspergillus · Cryptococcus · Histo/Blasto/Cocci · Mucor · PCP","uw":50,"an":65,"dv":"Ep 205 (Micro 2)"},
  "2026-09-17":{"s":"Micro","bc":"Micro integration day — UWorld Micro block 60 Qs timed. Review all Sketchy images from this week.","h":8,"type":"normal","fa":"FA Micro — error review + Sketchy rapid recall","uw":60,"an":65,"dv":"Ep 100 (Clutch Micro)"},
  "2026-09-18":{"s":"REST","bc":"Anki — Micro bacteria + fungi. Flip through Sketchy images from memory.","h":4,"type":"rest"},
  "2026-09-19":{"s":"Micro","bc":"Sketchy: DNA Viruses — Herpes family (HSV/VZV/EBV/CMV), Adenovirus, Parvovirus, HPV, HBV, Poxvirus","h":8,"type":"normal","fa":"FA Micro pp 185-194 (DNA viruses, serology)","sk":"Micro DNA Viruses: HSV · VZV · EBV · CMV · Adeno · Parvo B19 · HPV · HBV · Poxvirus","uw":70,"an":50,"dv":"Ep 2 (Viruses)"},
  "2026-09-20":{"s":"Micro","bc":"Sketchy: RNA Viruses — Influenza, Measles, Mumps, Rubella, Rabies, Picornaviruses, Rotavirus, Dengue","h":8,"type":"normal","fa":"FA Micro pp 195-202 (RNA viruses)","sk":"Micro RNA Viruses: Influenza · Measles · Mumps · Rubella · RSV · Rabies · Rota · Dengue","uw":70,"an":50,"dv":"Ep 3 (Viruses)"},
  "2026-09-21":{"s":"Micro","bc":"Sketchy: HIV/AIDS — lifecycle, CD4 thresholds & OIs, HAART classes (NRTIs/NNRTIs/PIs/INSTIs/fusion)","h":8,"type":"normal","fa":"FA Micro pp 203-210 (HIV, AIDS complications)","sk":"Micro: HIV/AIDS — lifecycle, CD4 thresholds, OIs, HAART (NRTIs/NNRTIs/PIs/INSTIs)","uw":70,"an":50,"dv":"Ep 218 (Micro 3)"},
  "2026-09-22":{"s":"Micro","bc":"Sketchy: Parasites — Protozoa (Plasmodium, Toxoplasma, Giardia, Entamoeba, Trypanosoma, Leishmania, Crypto)","h":8,"type":"normal","fa":"FA Micro pp 211-218 (protozoa)","sk":"Micro Parasites: Plasmodium · Toxo · Giardia · Entamoeba · Trypanosoma · Leishmania","uw":70,"an":50,"dv":"Ep 252 (PEP/HIV prophylaxis)"},
  "2026-09-23":{"s":"Micro","bc":"Sketchy: Helminths (Ascaris, hookworm, Strongyloides, tapeworms, Schistosoma) · Ectoparasites","h":8,"type":"normal","fa":"FA Micro pp 219-226 (helminths, ectoparasites)","sk":"Micro Parasites: Ascaris · Hookworm · Strongyloides · Tapeworms · Schistosoma · Ectoparasites","uw":70,"an":50,"dv":"Ep 459 (STI management)"},
  "2026-09-24":{"s":"Pharm","bc":"Sketchy: Antibiotics — cell wall inhibitors (PCN, cephalosporins, vancomycin, carbapenems) + protein synthesis + other","h":8,"type":"normal","fa":"FA Micro pp 227-238 (antimicrobials, mechanisms, resistance)","sk":"Pharm Antibiotics: PCN · Cephalosporins · Carbapenems · Vancomycin · Aminoglycosides · Macrolides · Tetracyclines · Fluoroquinolones","uw":70,"an":50,"dv":"Ep 460 (Antibiotics 1)"},
  "2026-09-25":{"s":"REST","bc":"Anki — Viruses + parasites Sketchy review. HIV CD4 count thresholds from memory.","h":4,"type":"rest"},
  "2026-09-26":{"s":"Pharm","bc":"Sketchy: Antifungals + Antiparasitic + Antivirals (NRTIs, NNRTIs, PIs, integrase inhibitors, neuraminidase inhibitors)","h":8,"type":"normal","fa":"FA Pharm pp 196-205 (antifungals, antivirals, HIV pharm)","sk":"Pharm: Antifungals (AmB/Azoles/Echinocandins) · Antivirals (NRTIs/NNRTIs/PIs/INSTIs/Neuraminidase)","uw":80,"an":40,"dv":"Ep 461 (Antibiotics 2)"},
  "2026-09-27":{"s":"Pharm","bc":"Sketchy: Cardiovascular drugs — antihypertensives, antiarrhythmics (Vaughan-Williams I-IV), HF drugs, anticoagulants","h":8,"type":"normal","fa":"FA Pharm pp 206-218 (cardio pharm, anticoagulants)","sk":"Pharm: Beta-blockers · CCBs · ACE/ARBs · Nitrates · Antiarrhythmics I-IV · Diuretics · Anticoagulants · Statins","uw":80,"an":40,"dv":"Ep 55 (Cardio Pharm)"},
  "2026-09-28":{"s":"Pharm","bc":"Sketchy: CNS drugs — antidepressants (SSRIs/SNRIs/TCAs/MAOIs), antipsychotics (typical/atypical), anticonvulsants, Parkinson/Alzheimer drugs, opioids","h":8,"type":"normal","fa":"FA Pharm pp 219-230 (psychopharm, neuro drugs)","sk":"Pharm: AEDs · Parkinson/Alzheimer drugs · Antipsychotics · Antidepressants (SSRIs/SNRIs/TCAs/MAOIs) · Anxiolytics","uw":80,"an":40,"dv":"Ep 20 (Psych Pharm)"},
  "2026-09-29":{"s":"Pharm","bc":"Sketchy: GI + Pulm + Endo + Renal + Antineoplastic drugs","h":8,"type":"normal","fa":"FA Pharm pp 231-end (all remaining pharm classes)","sk":"Pharm: GI drugs · Insulin/Oral hypoglycemics · Thyroid/Steroid/Sex hormones · Antineoplastics · DMARDs/Biologics","uw":80,"an":40,"dv":"Ep 432 (Pharm Blitz)"},
  "2026-09-30":{"s":"NBME","bc":"🎯 NBME Form 28 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme"},
  "2026-10-01":{"s":"Review","bc":"NBME 28 comprehensive error review. Identify top 3 remaining weak subjects. Update FA annotations.","h":8,"type":"normal","fa":"FA — error sections","uw":50,"dv":"Ep 433 (Drug Reactions 2)"},
  "2026-10-02":{"s":"REST","bc":"Anki — Pharm integration cards. No new content. Light review only.","h":4,"type":"rest"},
  "2026-10-03":{"s":"Dedicated","bc":"Weak area #1 (from NBME list) — Pathoma/Bootcamp rewatch + 60 targeted UWorld Qs in subject","h":8,"type":"normal","fa":"FA — weak subject 1","p":"Pathoma weak chapter","uw":60,"dv":"Ep 84 (Rapid Review 1)"},
  "2026-10-04":{"s":"Dedicated","bc":"Weak area #2 — content review + 60 UWorld questions + full explanations","h":8,"type":"normal","fa":"FA — weak subject 2","uw":60,"dv":"Ep 90 (Rapid Review 2)"},
  "2026-10-05":{"s":"Dedicated","bc":"Weak area #3 — content review + UWorld block + annotate FA on every error","h":8,"type":"normal","fa":"FA — weak subject 3","uw":60,"dv":"Ep 92 (Rapid Review 3)"},
  "2026-10-06":{"s":"Dedicated","bc":"UWorld timed random — 80 Qs. No tutoring mode. Full review of all explanations.","h":8,"type":"normal","fa":"FA — spot review errors","uw":80,"dv":"Ep 93 (Rapid Review 4)"},
  "2026-10-07":{"s":"NBME","bc":"🎯 NBME Form 30 — full timed exam (4 hrs). Then full error review.","h":8,"type":"nbme"},
  "2026-10-08":{"s":"Dedicated","bc":"NBME 30 error review — exhaustive. Note any topic appearing in multiple NBMEs (guaranteed on exam).","h":8,"type":"normal","fa":"FA — error sections","uw":40,"dv":"Ep 107 (Rapid Review GI)"},
  "2026-10-09":{"s":"REST","bc":"Full rest. No studying. Walk, eat well, sleep. You've earned it.","h":4,"type":"rest"},
  "2026-10-10":{"s":"Free 120","bc":"🎯 NBME Free 120 (2022 version) — full timed, exam conditions. Treat like the real thing. Full review.","h":8,"type":"nbme"},
  "2026-10-11":{"s":"Rapid FA","bc":"First Aid rapid pass: Biochem → Genetics → Immunology — speed read, HY tables only, mark any gaps","h":8,"type":"normal","fa":"FA: Biochem + Genetics + Immuno","uw":60,"dv":"Ep 117 (Rapid Review Repro)"},
  "2026-10-12":{"s":"Rapid FA","bc":"First Aid rapid pass: Cardio → Pulm → Renal — reinforce key tables and diagrams","h":8,"type":"normal","fa":"FA: Cardio + Pulm + Renal","uw":60,"dv":"Ep 160 (Rapid Review)"},
  "2026-10-13":{"s":"Rapid FA","bc":"First Aid rapid pass: GI → Endo → Repro","h":8,"type":"normal","fa":"FA: GI + Endo + Repro","uw":60,"dv":"Ep 168 (Rapid Review)"},
  "2026-10-14":{"s":"Rapid FA","bc":"First Aid rapid pass: Neuro + Psych → Heme + MSK + Derm → Micro + Pharm","h":8,"type":"normal","fa":"FA: Neuro/Psych/Heme/MSK/Derm/Micro/Pharm","uw":60,"dv":"Ep 500 (USMLE Rapid Review)"},
  "2026-10-15":{"s":"Free 120","bc":"🎯 NBME Free 120 (2023 version) — full timed. Compare with first Free 120 for progress.","h":8,"type":"nbme"},
  "2026-10-16":{"s":"REST","bc":"Free 120 error review only. Light Anki. No new material.","h":4,"type":"rest"},
  "2026-10-17":{"s":"Final","bc":"Pathoma Ch 1-4 rewatch at 2x speed — Cell Injury, Inflammation, Hemodynamics, Neoplasia. Most tested on Step 1.","h":8,"type":"normal","fa":"FA Pathology sections","p":"Pathoma Ch 1-4 at 2x speed","uw":60,"dv":"Ep 96 (Rapid Review 5)"},
  "2026-10-18":{"s":"Final","bc":"Sketchy Micro rapid image recall — flip through all bacteria + fungi + virus images. Name from memory.","h":8,"type":"normal","fa":"Sketchy all images (rapid)","sk":"Rapid recall: All Sketchy Micro — Bacteria (42) · Fungi (10) · Viruses (25) · Parasites (19)","uw":60,"dv":"Ep 101 (Rapid Review 6)"},
  "2026-10-19":{"s":"Final","bc":"UWorld redo — all marked/incorrect questions from entire prep. These are your personal weak spots.","h":8,"type":"normal","fa":"FA — spot review on redos","uw":80,"dv":"Ep 105 (Rapid Review 7)"},
  "2026-10-20":{"s":"Final","bc":"FA — HY tables, drug side effects, microbe presentations, key formulas. No deep reading. Skim and reinforce.","h":6,"type":"normal","fa":"FA: HY tables only","uw":40,"dv":"Ep 498 (Successful Dedicated 1)"},
  "2026-10-21":{"s":"Light Prep","bc":"No new content. Anki reviews only. Pack bag. Confirm test center, bring valid ID, plan snacks. Sleep by 9pm.","h":3,"type":"rest","dv":"Ep 499 (Successful Dedicated 2)"},
  "2026-10-22":{"s":"EXAM","bc":"🎯 USMLE STEP 1 — EXAM DAY. Trust your preparation. You are ready.","h":0,"type":"exam"}
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
