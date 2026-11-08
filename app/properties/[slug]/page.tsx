import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, BedDouble, Bath, Maximize2, Check, Phone, Mail, CalendarDays, Home, Layers } from "lucide-react";
import { properties } from "../../../lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default function PropertyDetails({ params }: { params: { slug: string } }) {
  const property = properties.find((item) => item.slug === params.slug);
  if (!property) notFound();

  return (
    <main className="details-page">
      <header className="header"><Link className="brand" href="/"><span className="brand-mark">H</span><span>HAVEN<span className="brand-light">ESTATES</span></span></Link><nav className="details-nav"><Link href="/#properties">Properties</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav><Link className="header-cta" href="mailto:hello@haven-estates.example">Let's talk <ArrowUpRight size={16}/></Link></header>

      <div className="details-container">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/#properties">Properties</Link><span>/</span><span>{property.title}</span></div>
        <div className="details-title-row"><div><p className="eyebrow">{property.tag.toUpperCase()} · {property.type.toUpperCase()}</p><h1>{property.title}</h1><p className="details-location"><MapPin size={16}/>{property.location}</p></div><div className="details-price"><span>Asking price</span><strong>{property.price}</strong><small>Illustrative concept listing</small></div></div>

        <div className="gallery-layout">
          <div className="gallery-main"><img src={property.images[0]} alt={`${property.title} — main view`}/></div>
          <div className="gallery-side">{property.images.slice(1).map((src, index) => <img key={src + index} src={src} alt={`${property.title} — gallery view ${index + 2}`}/>)}</div>
        </div>
        <p className="gallery-hint">Scroll through the gallery to explore the property</p>

        <div className="details-columns">
          <div className="details-content">
            <div className="spec-strip"><div><BedDouble/><strong>{property.beds}</strong><span>Bedrooms</span></div><div><Bath/><strong>{property.baths}</strong><span>Bathrooms</span></div><div><Maximize2/><strong>{property.size}</strong><span>Area</span></div><div><Home/><strong>{property.type}</strong><span>Property type</span></div></div>
            <section className="detail-section"><p className="eyebrow">THE PROPERTY</p><h2>A closer look at <em>your next home.</em></h2><p className="description">{property.description}</p></section>
            <section className="detail-section"><p className="eyebrow">PROPERTY DETAILS</p><h2>Thoughtful in <em>every detail.</em></h2><div className="detail-facts"><div><span>Property type</span><strong>{property.type}</strong></div><div><span>Floor / level</span><strong>{property.floor}</strong></div><div><span>Finishing</span><strong>{property.furnishing}</strong></div><div><span>Year built</span><strong>{property.year}</strong></div><div><span>Area</span><strong>{property.size}</strong></div><div><span>Location</span><strong>{property.location}</strong></div></div></section>
            <section className="detail-section"><p className="eyebrow">FEATURES & AMENITIES</p><h2>Made for <em>everyday living.</em></h2><div className="amenities">{property.features.map((feature) => <div key={feature}><Check size={17}/>{feature}</div>)}</div></section>
          </div>
          <aside className="inquiry-card"><p className="eyebrow">INTERESTED IN THIS PROPERTY?</p><h3>Let's arrange<br/><em>a closer look.</em></h3><p>Speak with our team to learn more or arrange a viewing. This is an illustrative portfolio listing.</p><a className="button inquiry-button" href={`mailto:hello@haven-estates.example?subject=${encodeURIComponent(`Enquiry: ${property.title}`)}`}>Enquire about this home <ArrowUpRight size={17}/></a><a className="inquiry-contact" href="tel:+201000000000"><Phone size={15}/> +20 100 000 0000</a><a className="inquiry-contact" href="mailto:hello@haven-estates.example"><Mail size={15}/> hello@haven-estates.example</a><div className="inquiry-note"><CalendarDays size={16}/> Viewings by appointment</div></aside>
        </div>
        <div className="back-to-list"><Link href="/#properties"><ArrowLeft size={16}/> Back to all properties</Link></div>
      </div>
      <footer className="footer"><Link className="brand brand-footer" href="/"><span className="brand-mark">H</span><span>HAVEN<span className="brand-light">ESTATES</span></span></Link><span>© 2026 Haven Estates. Concept project by Go Digital.</span><div><Link href="/#properties">Properties</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></div></footer>
    </main>
  );
}
