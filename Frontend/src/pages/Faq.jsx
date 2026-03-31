import { useState } from "react";
import "./Faq.css";

function Faq(){
    const items = [
    {
        question: 'How do I report an issue?',
        answer:
        "To report an issue, navigate to the 'Report Issue' page via the top menu. Fill out the comprehensive form including category, location, and a detailed description. You can also upload photos to help our maintenance team understand the problem better.",
    },
    {
        question: 'How long does resolution take?',
        answer:
        'Resolution time depends on issue category and urgency. Most standard requests are reviewed within 24 hours and resolved within 2-5 working days.',
    },
    {
        question: 'Who can use the system?',
        answer:
        'Students, faculty, staff, and authorized campus administration members can use CIRS to report and track issues.',
    },
    {
        question: 'Can I report issues anonymously?',
        answer:
        'Yes. You can choose to hide your identity when submitting a report, though contact details may help for follow-up in complex cases.',
    },
    {
        question: 'What categories of issues can be reported?',
        answer:
        'You can report maintenance, IT support, safety hazards, sanitation, utilities, and other campus infrastructure concerns.',
    }
    ];

    return(
        <>
        const [searchTerm, setSearchTerm] = useState('');
        const [openIndex, setOpenIndex] = useState(null);

        </>
    );
}