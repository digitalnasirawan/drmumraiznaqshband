// Prof. Dr. Mumraiz Naqshband - Official Medical Website Master Data Source
// Conforms strictly to approved business details & Section A1/A2 specifications

export const DOCTOR_INFO = {
  name: "Prof. Dr. Mumraiz Naqshband",
  legalName: "Dr. Mumraiz Salik Naqshband",
  title: "Professor | Consultant Orthopaedic Surgeon | Robotic Knee Replacement Surgeon",
  shortTitle: "Consultant Orthopaedic & Robotic Knee Surgeon",
  qualifications: [
    {
      degree: "M.B.C.H.B",
      institution: "New Zealand",
      description: "Bachelor of Medicine and Bachelor of Surgery"
    },
    {
      degree: "F.R.A.C.S (Ortho)",
      institution: "Australia",
      description: "Fellow of the Royal Australasian College of Surgeons (Orthopaedics)"
    },
    {
      degree: "F.R.C.S (Trauma & Ortho)",
      institution: "United Kingdom",
      description: "Fellow of the Royal College of Surgeons (Trauma & Orthopaedic Surgery)"
    }
  ],
  experienceYears: "20+",
  experienceSummary: "Over 20 years of international surgical training and consultant practice across New Zealand, Australia, the UK, and Pakistan.",
  academicAffiliation: "Professor of Orthopaedic Surgery at King Edward Medical University (KEMU) / Mayo Hospital, Lahore",
  specialistExpertise: "Robotic-assisted knee replacement using the CORI Surgical System, joint replacement surgery, arthroscopy, sports injuries and orthopaedic trauma.",
  professionalDistinction: "Pending Independent Verification: Only expert in Pakistan performing robotic knee replacement using the CORI Surgical System.",
  phone: "0321 4175761",
  phoneInternational: "+92 321 4175761",
  phoneTel: "+923214175761",
  whatsappUrl: "https://wa.me/923214175761",
  email: "info@drmumraiznaqshband.com", // Placeholder pending operational confirmation
  primaryLocation: "Lahore, Punjab, Pakistan",
  images: {
    portrait: "/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg",
    clinical: "/assets/images/prof-dr-mumraiz-naqshband-clinical-rounds.jpg",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/mumraiznaqshband/",
    facebook: "https://www.facebook.com/mumraiz.naqshband/",
    linkedin: "https://pk.linkedin.com/in/mumraiz-naqshband-4b337b342",
    researchGate: "https://www.researchgate.net/profile/Mumraiz-Naqshband",
    oladoc: "https://oladoc.com/pakistan/lahore/dr/orthopedic-surgeon/mumraiz-naqshband/461891",
    healthwire: "https://healthwire.pk/doctors/lahore/orthopedic-surgeon/asst-prof-dr-mumraiz-naqshband",
    bniProfile: "https://bni.com.pk/dr-mumraiz-naqshband/",
    mayoHospital: "https://mayoortho.com/our-doctors/",
    googleMaps: "https://maps.app.goo.gl/t9diagXPCTqfBTsx7"
  }
};

export const CLINIC_LOCATIONS = [
  {
    id: "bni",
    name: "BNI - Bashir NeuroSpine Institute",
    shortName: "Bashir NeuroSpine Institute",
    slug: "/bashir-neurospine-institute/",
    type: "Primary Consultation & Surgical Clinic",
    address: "18 Jail Rd, Shadman 1 Shadman, Lahore, 54000, Pakistan",
    phone: "0321 4175761",
    timing: "Monday to Saturday: By Prior Appointment",
    isPrimary: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.320498305088!2d74.3312!3d31.5369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5f7a26f8d%3A0x6b8bc2150392ad72!2sBashir%20NeuroSpine%20Institute!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    googleMapsLink: "https://maps.app.goo.gl/t9diagXPCTqfBTsx7",
    facilities: [
      "Advanced Robotic Knee Surgery Setup",
      "Dedicated Orthopaedic Operating Theatres",
      "Digital X-Ray & MRI Diagnostics",
      "In-House Physiotherapy & Rehabilitation Center",
      "Executive Consultation Suites"
    ]
  },
  {
    id: "bahria",
    name: "Bahria International Hospitals",
    shortName: "Bahria International Hospital",
    slug: "/bahria-international-hospitals/",
    type: "Consultant Hospital Clinic",
    address: "Takbeer Block Sector B Bahria Town, Lahore, 55150",
    phone: "0321 4175761",
    timing: "Consultation schedule pending verification. Please call ahead.",
    isPrimary: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.874136952876!2d74.1843!3d31.3653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391854580b080fb1%3A0xe54e262100e47854!2sBahria%20International%20Hospital%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    googleMapsLink: "https://maps.google.com/?q=Bahria+International+Hospital+Lahore",
    facilities: [
      "Tertiary Care Multi-Specialty Hospital",
      "24/7 Orthopaedic Emergency Care",
      "Comprehensive Inpatient Care",
      "ICU & Post-Operative High Dependency Unit"
    ]
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "robotic-knee",
    title: "Robotic Knee Replacement & Joint Reconstruction",
    shortTitle: "Robotic Knee Replacement",
    slug: "/robotic-knee-replacement/",
    icon: "Cpu",
    badge: "Specialist Distinction",
    heroImage: "/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg",
    summary: "State-of-the-art robotic-assisted joint replacement using the CORI Surgical System, achieving sub-millimeter implant alignment, minimal soft tissue disruption, and faster patient recovery.",
    treatments: [
      {
        title: "Robotic-Assisted Knee Replacement (CORI Robotic System)",
        slug: "/robotic-assisted-knee-replacement/",
        lead: "Pioneering robotic knee resurfacing and replacement using real-time CT-free 3D anatomical planning for optimal balance.",
        overview: "Robotic-assisted surgery with the CORI system allows Prof. Dr. Mumraiz Naqshband to map your unique joint anatomy in real-time during surgery, without exposing you to pre-operative CT radiation. A smart surgical robotic handpiece guides the bone preparation with pinpoint sub-millimeter precision.",
        benefits: ["CT-free 3D bone mapping", "Preserves healthy bone & ligaments", "More natural joint movement", "Faster hospital discharge"],
        candidates: "Patients suffering from severe knee osteoarthritis, debilitating stiffness, pain unresponsive to conservative care, or bone-on-bone joint damage."
      },
      {
        title: "Total Knee Replacement (TKR)",
        slug: "/total-knee-replacement/",
        lead: "Complete resurfacing of worn knee joint surfaces with advanced biomechanical implants designed to restore painless mobility.",
        overview: "Total Knee Replacement replaces damaged cartilage and bone with high-grade biocompatible metal alloys and medical-grade polyethylene liners. Performed with advanced alignment techniques to deliver lasting durability.",
        benefits: ["Permanent relief from severe arthritic pain", "Correction of knee bow-leg or knock-knee deformities", "Restored walking distance and independence"],
        candidates: "End-stage osteoarthritis, severe rheumatoid arthritis, or post-traumatic joint breakdown."
      },
      {
        title: "Partial Knee Replacement",
        slug: "/partial-knee-replacement/",
        lead: "Targeted resurfacing of only the worn compartment of the knee while preserving all healthy compartments and native ligaments.",
        overview: "When arthritis affects only one part of the knee (usually the medial compartment), a partial knee replacement preserves your anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL), offering a more natural feeling knee.",
        benefits: ["Smaller surgical incision", "Native ligament preservation", "Quicker recovery and return to daily activities"],
        candidates: "Patients with localized, single-compartment knee osteoarthritis with intact ligaments."
      },
      {
        title: "Revision Knee Replacement",
        slug: "/revision-knee-replacement/",
        lead: "Complex revision procedures to correct loosened, worn, or failed previous knee implants and restore stability.",
        overview: "Revision knee surgery requires advanced reconstructive techniques, bone grafting, and specialized constrained implants to restore knee stability and function after previous surgeries.",
        benefits: ["Relief of persistent post-implant pain", "Stabilization of loosened components", "Restoration of limb alignment"],
        candidates: "Patients with previous knee replacement who experience implant loosening, instability, fracture, or wear."
      },
      {
        title: "Knee Osteoarthritis Treatment",
        slug: "/knee-osteoarthritis-treatment/",
        lead: "Comprehensive staged care for degenerative cartilage wear, from non-operative joint preservation to advanced surgery.",
        overview: "A patient-tailored approach combining non-surgical therapies, intra-articular injections, targeted physical therapy, and surgical options when joint preservation is no longer viable.",
        benefits: ["Stepwise evidence-based treatment", "Pain reduction and cartilage preservation", "Tailored to your age and activity level"],
        candidates: "Adults experiencing chronic knee stiffness, morning pain, swelling, and reduced mobility."
      },
      {
        title: "Joint Preservation Surgery",
        slug: "/joint-preservation-surgery/",
        lead: "Surgical and biological procedures designed to preserve native cartilage and delay or avoid the need for artificial joint replacement.",
        overview: "Joint preservation techniques include corrective osteotomies to realign the mechanical axis of the leg, cartilage restoration procedures, and meniscus preservation.",
        benefits: ["Retains natural biological joint structures", "Postpones the need for prosthetic implants in younger patients"],
        candidates: "Active individuals and young adults with early focal joint wear or angular limb malalignment."
      }
    ]
  },
  {
    id: "hip-replacement",
    title: "Hip Replacement Surgery",
    shortTitle: "Hip Replacement Surgery",
    slug: "/hip-replacement-surgery/",
    icon: "ShieldAlert",
    badge: "Specialized Joint Care",
    summary: "Precision hip arthroplasty techniques for osteoarthritis, avascular necrosis, and trauma, engineered to restore pain-free walking and full functional hip stability.",
    treatments: [
      {
        title: "Total Hip Replacement (THR)",
        slug: "/total-hip-replacement/",
        lead: "Advanced prosthetic hip replacement replacing damaged femoral heads and acetabular sockets with durable modern bearing surfaces.",
        overview: "Total Hip Replacement is one of modern medicine's most successful operations. Damaged ball-and-socket surfaces are replaced with precision ceramic-on-polyethylene or specialized metal components to eradicate chronic groin and hip pain.",
        benefits: ["Elimination of debilitating groin and hip stiffness", "Restores normal leg length and walking symmetry", "Long-term implant durability"],
        candidates: "Patients with severe hip arthritis, avascular necrosis (AVN), or congenital hip dysplasia."
      },
      {
        title: "Hip Replacement for Osteoarthritis",
        slug: "/hip-replacement-for-osteoarthritis/",
        lead: "Surgical intervention for end-stage degeneration of the hip joint when non-surgical measures no longer provide relief.",
        overview: "Targets chronic cartilage erosion that causes painful bone friction, limited range of motion, and difficulty tying shoes or climbing stairs.",
        benefits: ["Restores joint mobility and comfort", "Improves overall cardiovascular vitality by enabling exercise"],
        candidates: "Individuals with progressive cartilage thinning and functional impairment of the hip."
      },
      {
        title: "Hip Fracture-Related Hip Replacement",
        slug: "/hip-fracture-replacement/",
        lead: "Urgent hemiarthroplasty or total hip arthroplasty for neck of femur fractures in mature and elderly patients.",
        overview: "Rapid surgical stabilization following traumatic hip fractures to mobilize patients within 24-48 hours and prevent complications of bed rest.",
        benefits: ["Early weight-bearing and mobilization", "Dramatically reduces fracture-related complications"],
        candidates: "Patients presenting with acute displaced femoral neck fractures."
      },
      {
        title: "Revision Hip Replacement",
        slug: "/revision-hip-replacement/",
        lead: "Specialized reconstruction for previously implanted hip prostheses experiencing wear, dislocation, or bone loss.",
        overview: "Reconstructing complex acetabular and femoral defects using modular revision stems, augmentations, and trabecular metal solutions.",
        benefits: ["Restores hip stability and stops recurring dislocations", "Rebuilds lost pelvic and femoral bone support"],
        candidates: "Patients with painful, loosened, or compromised existing hip implants."
      },
      {
        title: "Management of Hip Joint Disorders",
        slug: "/hip-joint-disorders/",
        lead: "Diagnostic evaluation and management of labral tears, femoroacetabular impingement (FAI), and trochanteric pain syndromes.",
        overview: "Careful clinical and imaging assessment of deep hip pain, impingement syndromes, and peri-trochanteric bursitis.",
        benefits: ["Accurate anatomical diagnosis", "Targeted therapeutic injection or minimally invasive solutions"],
        candidates: "Patients with groin clicks, snapping hips, or persistent lateral hip discomfort."
      }
    ]
  },
  {
    id: "sports-injury",
    title: "Sports Injury Surgery",
    shortTitle: "Sports Injury Surgery",
    slug: "/sports-injury-surgery/",
    icon: "Activity",
    badge: "Athletic & Ligament Care",
    summary: "Minimally invasive reconstruction of knee ligaments, cartilage, and tendons to return athletes and active individuals to high-demand functional performance.",
    treatments: [
      {
        title: "ACL Reconstruction",
        slug: "/acl-reconstruction/",
        lead: "Anatomic arthroscopic anterior cruciate ligament reconstruction using modern autograft tissue and anatomical fixation.",
        overview: "The ACL is vital for rotational knee stability. Prof. Dr. Mumraiz Naqshband performs anatomical reconstruction utilizing hamstring or patellar tendon grafts to restore pivot-shift stability.",
        benefits: ["Restores rotational knee stability", "Protects secondary structures like meniscus and cartilage", "Facilitates safe return to sporting activity"],
        candidates: "Athletes and active individuals with acute or chronic ACL rupture experiencing knee instability."
      },
      {
        title: "PCL Reconstruction",
        slug: "/pcl-reconstruction/",
        lead: "Reconstruction of posterior cruciate ligament ruptures caused by high-energy collisions or athletic trauma.",
        overview: "Treating posterior tibial sag and translational instability through arthroscopic single or double-bundle PCL reconstruction techniques.",
        benefits: ["Prevents posterior sag and patellofemoral overload", "Restores knee biomechanics"],
        candidates: "Patients with Grade III PCL tears or symptomatic multidirectional laxity."
      },
      {
        title: "Meniscus Repair and Preservation",
        slug: "/meniscus-repair/",
        lead: "Advanced inside-out and all-inside arthroscopic suturing techniques to save native shock-absorbing meniscus tissue.",
        overview: "Preserving the meniscus is critical to preventing premature osteoarthritis. Tears within vascular zones are meticulously repaired using state-of-the-art suture devices.",
        benefits: ["Protects underlying articular cartilage", "Prevents early onset degenerative joint disease"],
        candidates: "Patients with traumatic meniscus tears suitable for surgical repair."
      },
      {
        title: "Multiligament Knee Reconstruction",
        slug: "/multiligament-knee-reconstruction/",
        lead: "Comprehensive surgical reconstruction for complex multi-ligament knee injuries and knee dislocations.",
        overview: "Simultaneous repair or reconstruction of combinations involving the ACL, PCL, MCL, and posterolateral corner (PLC).",
        benefits: ["Restores limb stability and neurovascular safety", "Enables safe long-term weight bearing"],
        candidates: "High-impact sports trauma or motor vehicle accident injuries with multiple torn knee ligaments."
      },
      {
        title: "Sports-Related Knee Injuries",
        slug: "/sports-knee-injuries/",
        lead: "Rapid diagnostic evaluation and treatment protocols for acute sprains, collisions, and extensor mechanism disruptions.",
        overview: "Comprehensive management of acute hemarthrosis, quadriceps/patellar tendon ruptures, and collateral ligament sprains.",
        benefits: ["Expedited diagnosis with MRI correlation", "Clear stage-wise rehabilitation roadmaps"],
        candidates: "Athletes suffering acute knee trauma during football, cricket, running, or martial arts."
      },
      {
        title: "Cartilage and Ligament Injuries",
        slug: "/cartilage-ligament-injuries/",
        lead: "Advanced biological and operative therapies addressing osteochondral defects and focal joint cartilage damage.",
        overview: "Utilizing microfracture, chondral grafting, and restorative techniques to heal damaged articular surfaces.",
        benefits: ["Relieves localized joint catching and aching", "Stops progressive cartilage breakdown"],
        candidates: "Active individuals with localized cartilage defects and intact surrounding bone."
      },
      {
        title: "Knee Instability Treatment",
        slug: "/knee-instability-treatment/",
        lead: "Assessment and surgical correction for patellofemoral subluxation and chronic joint giving-way episodes.",
        overview: "Targeting medial patellofemoral ligament (MPFL) reconstruction, trochleoplasty, and tibial tubercle osteotomy to stabilize the kneecap.",
        benefits: ["Eliminates recurrent kneecap dislocations", "Restores confidence during vigorous physical activities"],
        candidates: "Patients with patellar instability or chronic knee buckling."
      }
    ]
  },
  {
    id: "arthroscopic-surgery",
    title: "Arthroscopic & Minimally Invasive Surgery",
    shortTitle: "Arthroscopic Surgery",
    slug: "/arthroscopic-surgery/",
    icon: "Crosshair",
    badge: "Keyhole Precision",
    summary: "High-definition keyhole joint procedures utilizing miniature cameras and specialized micro-instruments, minimizing tissue trauma and accelerating recovery.",
    treatments: [
      {
        title: "Knee Arthroscopy",
        slug: "/knee-arthroscopy/",
        lead: "Diagnostic and therapeutic keyhole procedure to treat internal knee derangements with minimal incisions.",
        overview: "A pencil-sized camera transmits high-definition magnified views of the internal knee, allowing removal of loose bodies, smoothing of torn cartilage, and assessment of ligament integrity.",
        benefits: ["Tiny puncture incisions with minimal scarring", "Often performed as outpatient day surgery", "Fast recovery"],
        candidates: "Patients with mechanical knee catching, locked knee, persistent effusion, or diagnostic ambiguity."
      },
      {
        title: "Shoulder Arthroscopy",
        slug: "/shoulder-arthroscopy/",
        lead: "Minimally invasive keyhole inspection and repair of rotator cuff tendons, labral structures, and subacromial spurs.",
        overview: "Keyhole surgery addressing subacromial impingement, calcific tendinitis, and glenohumeral pathology with microscopic precision.",
        benefits: ["Spares deltoid muscle detachment", "Significantly less post-operative pain than open surgery"],
        candidates: "Patients with chronic overhead shoulder pain, impingement, or labral tears."
      },
      {
        title: "Arthroscopic Meniscus Surgery",
        slug: "/arthroscopic-meniscus-surgery/",
        lead: "Targeted trimming (partial meniscectomy) or suture stabilization for unrepairable or complex degenerative meniscus tears.",
        overview: "Precision removal of only unstable torn fragments while preserving the maximal remaining rim of shock-absorbing tissue.",
        benefits: ["Relief of joint-line clicking and catching", "Rapid return to walking within days"],
        candidates: "Patients with painful torn meniscus flaps causing mechanical joint locking."
      },
      {
        title: "Arthroscopic Ligament Reconstruction",
        slug: "/arthroscopic-ligament-reconstruction/",
        lead: "Endoscopically guided reconstruction of intra-articular ligaments without large open exposures.",
        overview: "Using precise arthroscopic guides to drill anatomical tunnels and seat autografts with absolute millimeter fidelity.",
        benefits: ["Preserves joint capsule and surrounding tissue", "Lower infection risk and minimal blood loss"],
        candidates: "Candidates requiring cruciate or collateral ligament repairs."
      },
      {
        title: "Management of Selected Shoulder Injuries",
        slug: "/shoulder-injury-treatment/",
        lead: "Expert clinical assessment and arthroscopic care for acromioclavicular separations and shoulder dislocations.",
        overview: "Restoring the delicate balance of the glenohumeral and acromioclavicular joints through anatomic keyhole stabilization.",
        benefits: ["Restores overhead throwing and lifting power", "Prevents chronic subluxation"],
        candidates: "Active individuals with acute or chronic shoulder sprains."
      },
      {
        title: "Minimally Invasive Joint Procedures",
        slug: "/minimally-invasive-joint-surgery/",
        lead: "A philosophy of surgical tissue conservation applied across knee, hip, and shoulder conditions.",
        overview: "Combining modern optics, specialized retractor systems, and regional analgesia for rapid rehabilitation.",
        benefits: ["Reduced postoperative narcotic requirements", "Shorter hospital stays"],
        candidates: "Patients seeking the least traumatic surgical route for joint correction."
      }
    ]
  },
  {
    id: "shoulder-joint",
    title: "Shoulder & Other Joint Disorders",
    shortTitle: "Shoulder & Joint Disorders",
    slug: "/shoulder-joint-disorders/",
    icon: "Layers",
    badge: "Upper Limb Care",
    summary: "Specialist evaluation and treatment of shoulder impingement, rotator cuff tears, recurrent dislocations, and complex elbow/wrist conditions.",
    treatments: [
      {
        title: "Shoulder Pain Assessment",
        slug: "/shoulder-pain-treatment/",
        lead: "Systematic differential diagnosis of acute and chronic shoulder pain through clinical evaluation and imaging.",
        overview: "Distinguishing between rotator cuff disease, frozen shoulder (adhesive capsulitis), cervical radiculopathy, and glenohumeral arthritis.",
        benefits: ["Pinpoints the exact source of upper limb dysfunction", "Avoids unnecessary or ineffective interventions"],
        candidates: "Anyone experiencing nocturnal shoulder aching, weakness, or painful arc on lifting."
      },
      {
        title: "Rotator Cuff Injuries",
        slug: "/rotator-cuff-injuries/",
        lead: "Arthroscopic tendon re-anchoring and repair for supraspinatus, infraspinatus, and subscapularis tendon tears.",
        overview: "Using bio-composite suture anchors to firmly reattach torn tendons to the humeral head footprints, restoring arm strength.",
        benefits: ["Relieves nighttime arm pain", "Restores active arm elevation and carrying power"],
        candidates: "Patients with partial or full-thickness rotator cuff tears confirmed on MRI."
      },
      {
        title: "Shoulder Instability",
        slug: "/shoulder-instability/",
        lead: "Bankart repair and capsular shift procedures to treat recurrent shoulder dislocations and loose joints.",
        overview: "Reattaching the torn glenoid labrum and tightening stretched ligaments to prevent the ball from slipping out of the socket.",
        benefits: ["Restores confidence in overhead movement and athletic maneuvers", "Prevents long-term glenoid bone loss"],
        candidates: "Patients who have suffered one or more shoulder dislocations."
      },
      {
        title: "Sports-Related Shoulder Injuries",
        slug: "/sports-shoulder-injuries/",
        lead: "Care for SLAP tears, biceps tendinopathy, and throwing athlete shoulder dysfunction.",
        overview: "Specialized arthroscopic treatment designed for cricket bowlers, racquet sport players, and overhead athletes.",
        benefits: ["Protects throwing mechanics", "Targeted post-op kinetic chain rehabilitation"],
        candidates: "Competitive and recreational overhead athletes."
      },
      {
        title: "Selected Elbow and Wrist Disorders",
        slug: "/elbow-wrist-disorders/",
        lead: "Evaluation of tennis elbow, golfer's elbow, carpal tunnel syndrome, and upper extremity trauma.",
        overview: "Evidence-based conservative protocols, ultrasound-guided interventions, and surgical releases where indicated.",
        benefits: ["Restores gripping strength and relieves hand numbness"],
        candidates: "Patients with resistant lateral epicondylitis or nerve entrapment symptoms."
      }
    ]
  },
  {
    id: "fracture-trauma",
    title: "Orthopaedic Trauma & Fracture Surgery",
    shortTitle: "Fracture & Trauma Surgery",
    slug: "/fracture-trauma-surgery/",
    icon: "Bone",
    badge: "Urgent & Complex Care",
    summary: "Expert surgical management of acute limb fractures, intra-articular injuries, non-unions, and high-energy orthopaedic trauma.",
    treatments: [
      {
        title: "Fracture Management",
        slug: "/fracture-management/",
        lead: "Accurate diagnosis, reduction, and casting or surgical stabilization for simple and displaced bone fractures.",
        overview: "Thorough assessment of soft tissues and bone fragments to determine whether conservative casting or surgical alignment yields the best healing.",
        benefits: ["Ensures anatomical bone healing without deformity", "Prevents limb shortening or malrotation"],
        candidates: "Patients presenting with acute limb fractures from falls or road traffic accidents."
      },
      {
        title: "Surgical Fixation of Fractures",
        slug: "/fracture-fixation-surgery/",
        lead: "Internal fixation using modern anatomic locking plates, intramedullary nails, and lag screws.",
        overview: "Rigid biomechanical stabilization of long bone and peri-articular fractures allowing early patient mobility.",
        benefits: ["Permits early joint movement and physical therapy", "Accelerates functional return to work and life"],
        candidates: "Displaced, unstable, or multi-fragment fractures requiring operative stabilization."
      },
      {
        title: "Complex Orthopaedic Trauma",
        slug: "/complex-orthopaedic-trauma/",
        lead: "Tertiary-level treatment for open fractures, polytrauma patients, and severe musculoskeletal injuries.",
        overview: "Prof. Dr. Mumraiz Naqshband's UK, Australian, and KEMU trauma experience ensures state-of-the-art staged damage control and definitive reconstruction.",
        benefits: ["Systematic multi-disciplinary trauma protocol", "Advanced limb salvage capabilities"],
        candidates: "High-velocity road traffic accidents and severe industrial or falling trauma."
      },
      {
        title: "Fractures Involving Joints",
        slug: "/joint-fracture-treatment/",
        lead: "Meticulous anatomic restoration of articular surfaces in tibial plateau, distal femur, and ankle fractures.",
        overview: "Restoring the perfect joint congruency to prevent post-traumatic arthritis and chronic joint stiffness.",
        benefits: ["Re-establishes smooth cartilage gliding surfaces", "Significantly delays or avoids post-traumatic arthritis"],
        candidates: "Patients with fractures extending directly into the knee, hip, or ankle joints."
      },
      {
        title: "Post-Traumatic Joint Disorders",
        slug: "/post-traumatic-joint-disorders/",
        lead: "Management of post-injury stiffness, limb malunion, chronic pain, and joint deterioration.",
        overview: "Corrective osteotomies, contracture releases, and reconstruction for joints damaged following previous trauma.",
        benefits: ["Corrects crooked healed bones", "Improves motion in severely stiffened joints"],
        candidates: "Patients with persistent pain or limitation months or years following an injury."
      },
      {
        title: "Trauma-Related Joint Reconstruction",
        slug: "/trauma-joint-reconstruction/",
        lead: "Arthroplasty and reconstructive surgery for post-traumatic bone loss and joint destruction.",
        overview: "Combining custom or modular joint replacements with structural bone grafts to rebuild fractured or eroded joints.",
        benefits: ["Restores weight-bearing function in shattered joints"],
        candidates: "Cases where natural joint salvage is no longer viable after trauma."
      }
    ]
  },
  {
    id: "arthritis-joint-pain",
    title: "Arthritis & Joint Pain Management",
    shortTitle: "Arthritis & Joint Pain",
    slug: "/arthritis-joint-pain/",
    icon: "HeartPulse",
    badge: "Restorative Joint Care",
    summary: "Personalized, evidence-based care for osteoarthritis and chronic joint pain, combining lifestyle modifications, targeted injections, and surgical pathways.",
    treatments: [
      {
        title: "Knee Osteoarthritis",
        slug: "/knee-osteoarthritis-treatment/",
        lead: "Specialized care pathways for knee cartilage degradation and bone-on-bone joint friction.",
        overview: "Shared treatment resource providing continuous care options from lifestyle guidance to advanced robotic knee resurfacing.",
        benefits: ["Evidence-based conservative and surgical continuum"],
        candidates: "Adults dealing with painful knee crepitus, stiffness, and walking limits."
      },
      {
        title: "Hip Osteoarthritis",
        slug: "/hip-osteoarthritis-treatment/",
        lead: "Targeted clinical protocols to preserve hip function and determine optimal timing for surgical intervention.",
        overview: "Assessing cartilage loss, osteophyte formation, and functional disability to formulate the right medical or surgical plan.",
        benefits: ["Prevents progression of mobility loss", "Ensures timely intervention before severe bone loss"],
        candidates: "Patients with deep groin aching, difficulty climbing stairs, or reduced hip rotation."
      },
      {
        title: "Chronic Knee and Hip Pain",
        slug: "/chronic-knee-hip-pain/",
        lead: "Diagnostic clarity and pain management strategies for persistent unexplained joint discomfort.",
        overview: "Comprehensive clinical assessment to differentiate intra-articular pain from referred spinal or neurological pain.",
        benefits: ["Eliminates guesswork in joint discomfort diagnosis", "Clear personalized recovery plan"],
        candidates: "Patients who have had inconclusive tests or unresponsive joint therapies."
      },
      {
        title: "Degenerative Joint Disorders",
        slug: "/degenerative-joint-disorders/",
        lead: "Holistic management of generalized wear-and-tear across weight-bearing and non-weight-bearing joints.",
        overview: "Multi-joint care integrating pharmacology, joint lubrication, physical therapy, and assistive bracing.",
        benefits: ["Maintains independent living and functional capability"],
        candidates: "Mature individuals with multi-joint osteoarthritis."
      },
      {
        title: "Non-Surgical Management of Joint Conditions",
        slug: "/non-surgical-joint-treatment/",
        lead: "Evidence-based conservative protocols: targeted physiotherapy, viscosupplementation, and weight optimization.",
        overview: "Before considering surgery, every patient is evaluated for non-invasive joint preservation protocols that relieve pain safely.",
        benefits: ["Avoids surgical intervention when conservative care suffices", "Minimizes recovery downtime"],
        candidates: "Early to moderate arthritis patients seeking non-operative relief."
      },
      {
        title: "Assessment for Joint Replacement Surgery",
        slug: "/joint-replacement-assessment/",
        lead: "In-depth clinical scoring, digital templating, and candidacy evaluation for robotic knee or hip replacement.",
        overview: "Objective radiographic grading, alignment mapping, and medical clearance to establish if and when surgery is the right step.",
        benefits: ["Clear, honest surgical risk-benefit evaluation", "Realistic expectations regarding recovery and outcomes"],
        candidates: "Patients whose daily quality of life is heavily compromised by chronic joint damage."
      },
      {
        title: "Individualized Treatment Planning",
        slug: "/orthopaedic-treatment-planning/",
        lead: "Patient-centered treatment blueprints tailored to your age, activity goals, medical history, and daily needs.",
        overview: "No two joints are identical. Prof. Dr. Mumraiz Naqshband crafts a custom orthopaedic strategy for every individual.",
        benefits: ["Empowers patients with knowledge and choices", "Transparent treatment roadmap"],
        candidates: "Every patient consulting for specialist orthopaedic guidance."
      }
    ]
  }
];

export const PATIENT_RESULTS = [
  {
    id: "case-1",
    procedure: "Robotic-Assisted Total Knee Replacement (CORI System)",
    patientProfile: "62-Year-Old Female, Severe Bilateral Knee Osteoarthritis",
    preOpCondition: "Severe varus (bow-legged) deformity, unable to walk more than 50 meters without extreme pain. Dependent on daily painkillers.",
    surgicalApproach: "Robotic CT-free knee resurfacing with real-time soft tissue ligament tensioning and sub-millimeter component alignment.",
    postOpOutcome: "Walking with assistance on Day 1. Full 115° knee flexion achieved at week 6. Returned to independent daily walks completely pain-free.",
    metrics: [
      { label: "Walking Independence", value: "Day 1 Post-Op" },
      { label: "Range of Motion", value: "0° to 120°" },
      { label: "Pain Score Reduction", value: "9/10 to 0/10" }
    ],
    verifiedNote: "Individual surgical recovery depends on overall health and adherence to rehabilitation protocols."
  },
  {
    id: "case-2",
    procedure: "Arthroscopic ACL Reconstruction with Hamstring Autograft",
    patientProfile: "26-Year-Old Football Athlete, Acute Rotational Pivot Tear",
    preOpCondition: "Complete ACL rupture with lateral meniscus tear sustained during athletic match. Knee giving way repeatedly during turns.",
    surgicalApproach: "Keyhole anatomical single-bundle ACL reconstruction with simultaneous meniscus repair and preservation.",
    postOpOutcome: "Full stability restored. Passed return-to-sport functional tests at 9 months and successfully resumed competitive football.",
    metrics: [
      { label: "Stability Restored", value: "Lachman Negative" },
      { label: "Meniscus Preserved", value: "100% Repaired" },
      { label: "Return to Field", value: "9 Months" }
    ],
    verifiedNote: "Athletic return protocols follow structured functional criteria."
  },
  {
    id: "case-3",
    procedure: "Total Hip Replacement (Ceramic-on-Polyethylene)",
    patientProfile: "55-Year-Old Male, Avascular Necrosis (AVN) of Hip",
    preOpCondition: "Severe groin pain, marked limp, leg length discrepancy of 1.5 cm, difficulty sleeping and sitting comfortably.",
    surgicalApproach: "Uncemented ceramic-on-polyethylene total hip arthroplasty with precise leg length restoration.",
    postOpOutcome: "Discharged on Day 2. Equal leg length restored. Returned to office work at 4 weeks and golf at 3 months.",
    metrics: [
      { label: "Leg Length", value: "Symmetrically Restored" },
      { label: "Hospital Stay", value: "48 Hours" },
      { label: "Mobility Status", value: "No Limp at 6 Wks" }
    ],
    verifiedNote: "Outcome confirmed through radiographic and clinical examination."
  }
];

export const FAQS = [
  {
    category: "Robotic Knee Surgery",
    items: [
      {
        q: "What makes robotic knee replacement with the CORI system different from traditional surgery?",
        a: "The CORI Surgical System does not replace the surgeon; rather, it provides real-time 3D anatomical mapping during surgery without requiring a pre-operative CT scan (eliminating radiation exposure). A smart handheld milling tool guides the bone preparation with sub-millimeter accuracy, ensuring that implants are aligned with unmatched precision to your unique knee anatomy."
      },
      {
        q: "Is robotic knee replacement safer than conventional knee surgery?",
        a: "Robotic assistance allows for more precise bone cuts, optimal ligament balancing, and significantly less soft tissue trauma. This typically results in less post-operative pain, reduced blood loss, better joint stability, and faster return to active daily living."
      },
      {
        q: "How soon can I walk after robotic knee replacement?",
        a: "Most patients are assisted to stand and take their first steps within 24 hours after surgery under the guidance of our specialized physiotherapy team. Many patients are discharged from the hospital within 2 to 3 days."
      }
    ]
  },
  {
    category: "Joint Replacement & General Orthopaedics",
    items: [
      {
        q: "How long does a modern knee or hip replacement implant last?",
        a: "With contemporary biocompatible materials (such as advanced ceramics and highly cross-linked polyethylene) and precise robotic alignment, modern joint replacements are engineered to last 20 to 25 years or longer for the vast majority of patients."
      },
      {
        q: "Do I always need surgery for knee or hip osteoarthritis?",
        a: "No. Surgery is only recommended when conservative, non-surgical therapies (including physical therapy, lifestyle changes, and targeted joint injections) no longer provide adequate pain relief and the condition severely impairs your quality of life."
      },
      {
        q: "What qualifications should I look for in an orthopaedic joint replacement surgeon?",
        a: "Look for international specialist qualifications and rigorous fellowship training. Prof. Dr. Mumraiz Naqshband holds the prestigious FRACS (Australia), FRCS (UK), and MBChB (New Zealand) alongside serving as a Professor of Orthopaedics at King Edward Medical University (KEMU) / Mayo Hospital, Lahore."
      }
    ]
  },
  {
    category: "Consultations & Clinic Appointments",
    items: [
      {
        q: "Where does Prof. Dr. Mumraiz Naqshband see patients in Lahore?",
        a: "Prof. Dr. Mumraiz Naqshband consults primarily at BNI - Bashir NeuroSpine Institute, located at 18 Jail Rd, Shadman 1, Lahore. He also holds surgical appointments at Bahria International Hospitals, Bahria Town, Lahore."
      },
      {
        q: "How do I book an appointment?",
        a: "You can book directly by calling 0321 4175761 (+92 321 4175761), sending a WhatsApp message to +92 321 4175761, or using the interactive booking form on this website."
      },
      {
        q: "What should I bring to my initial consultation?",
        a: "Please bring all prior X-rays, MRI scans, CT scans, blood test reports, and a list of your current medications so Prof. Dr. Mumraiz Naqshband can perform a thorough, individualized assessment."
      }
    ]
  }
];

export const TRUST_STATS = [
  { value: "20+", label: "Years Experience", description: "International & Pakistan Practice" },
  { value: "5,000+", label: "Surgeries Performed", description: "Joint & Arthroscopic Procedures" },
  { value: "CORI", label: "Robotic System", description: "Sub-millimeter Precision" },
  { value: "KEMU", label: "Professor of Orthopaedics", description: "King Edward Medical University" }
];
