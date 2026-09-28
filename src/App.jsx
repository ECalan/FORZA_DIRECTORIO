import "./App.css";

const DEPARTMENTS = [
  {
    name: "Nóminas",
    contacts: [
      /*{
        name: "Jonathan Azurdia",
        phone: "502 5312 8229",
        tel: "+50253128229",
        topics: [],
      },*/
      {
        name: "Jonathan Azurdia",
        phone: "502 5312 8229",
        tel: "+50253128229",
        name2: "Abigail De León",
        phone2: "502 3769 1376",
        tel2: "+50237691376",
        topics: [
          {
            icon: "💰",
            label: "Pagos y Descuentos",
            wa: "https://wa.me/50253128229?text=Pagos%20y%20Descuentos",
          },
          {
            icon: "📑",
            label: "Pago de Liquidaciones",
            wa: "https://wa.me/50253128229?text=Informacion%20sobre%20Pago%20de%20Liquidaciones",
          },
          {
            icon: "📝",
            label: "Inscripción y Actualización de Datos IGSS",
            wa: "https://wa.me/50253128229?text=Inscripcion%20y%20Actualizacion%20de%20Datos%20IGSS",
          },
          {
            icon: "❓",
            label: "Respuesta Portal IGSS para Pagos",
            wa: "https://wa.me/50253128229?text=Respuesta%20de%20Consultas%20para%20Pagos%20del%20IGSS",
          },
          {
            icon: "📄",
            label: "Constancias de Ingresos",
            wa: "https://wa.me/50253128229?text=Constancias%20de%20Ingresos",
          },
          {
            icon: "🧾",
            label: "Boletas de Pago",
            wa: "https://wa.me/50253128229?text=Boletas%20de%20Pago",
          },
        ],
      },
    ],
  },
  {
    name: "Relaciones Laborales",
    contacts: [
      {
        name: "Erick Sermeño",
        phone: "502 4770 3179",
        tel: "+50247703179",
        topics: [
          {
            icon: "🆔",
            label: "Gafetes de Identificación",
            wa: "https://wa.me/50247703179?text=Gafetes%20de%20identificaci%C3%B3n",
          },
          {
            icon: "🪪",
            label: "Trámite de Carné de IRTRA",
            wa: "https://wa.me/50247703179?text=Tramite%20de%20Carne%20de%20IRTRA",
          },
          {
            icon: "🚗",
            label: "Parqueo Interno y Anexo",
            wa: "https://wa.me/50247703179?text=Parqueo%20Interno%20y%20Anexo",
          },
          {
            icon: "🏥",
            label: "Seguro EPPS",
            wa: "https://wa.me/50247703179?text=Seguro%20EPPS",
          },
        ],
      },
      {
        name: "Katherine Lima",
        phone: "502 3568 4763",
        tel: "+50235684763",
        topics: [
          {
            icon: "📄",
            label: "Emisión de Constancias Laborales",
            wa: "https://wa.me/50235684763?text=Emisi%C3%B3n%20de%20Constancias%20Laborales",
          },
          {
            icon: "📧",
            label: "Referencias Laborales (Por Correo)",
            wa: "https://wa.me/50235684763?text=Referencias%20Laborales%20%28Por%20Correo%29",
          },
          {
            icon: "🧾",
            label: "Cheques (Casos Especiales)",
            wa: "https://wa.me/50235684763?text=Entrega%20de%20Cheques%20%28Casos%20Especiales%29",
          },
          {
            icon: "🙋",
            label: "Atención al Cliente Interno (Varios)",
            wa: "https://wa.me/50235684763?text=Atencion%20al%20Cliente%20Interno%20%28Temas%20Varios%29",
          },
        ],
      },
      {
        name: "Emily Fernández",
        phone: "502 3757 4907",
        tel: "+50237574907",
        topics: [
          {
            icon: "📋",
            label: "Acciones de Personal (Excepto IGSS)",
            wa: "https://wa.me/50237574907?text=Acciones%20de%20Personal%20%28Excepto%20Igss%29",
          },
          {
            icon: "📑",
            label: "Proceso de Liquidaciones",
            wa: "https://wa.me/50237574907?text=Informacion%20del%20Proceso%20de%20Liquidaciones",
          },
          {
            icon: "🏖️",
            label: "Saldo de Días de Vacaciones",
            wa: "https://wa.me/50237574907?text=Consulta%20sobre%20Saldo%20de%20Dias%20de%20Vacaciones",
          }
        ],
      },
      {
        name: "Sheily Guzmán",
        phone: "502 5922 8221",
        tel: "+50259228221",
        topics: [
          {
            icon: "📋",
            label: "Acción de Personal (IGSS)",
            wa: "https://wa.me/50259228221?text=Accion%20de%20Personal%20%28IGSS%29",
          },
          {
            icon: "⚠️",
            label: "Proceso Disciplinario",
            wa: "https://wa.me/50259228221?text=Sistema%20Diciplinario",
          },
        ],
      },
      {
        name: "Eddy Calan",
        phone: "502 5514 2278",
        tel: "+50255142278",
        topics: [
          {
            icon: "👕",
            label: "Uniformes de Personal",
            wa: "https://wa.me/50255142278?text=Uniformes%20de%20Personal",
          },
          {
            icon: "🏖️",
            label: "Fondo de Vacaciones",
            wa: "https://wa.me/50237574907?text=Consulta%20sobre%20Saldo%20de%20Dias%20de%20Vacaciones",
          },
        ],
      },
    ],
  },
];

function TopicLink({ icon, label, wa }) {
  return (
    <a className="topic" href={wa} target="_blank" rel="noopener noreferrer">
      <span className="topic-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}

function Contact({ name, name2, phone, phone2, tel, tel2, topics }) {
  return (
    <div className="contact">
      <div className="contact-head">
        <span className="contact-name">📌 {name}</span>
        <a className="contact-phone" href={`tel:${tel}`}>
          {phone}
        </a>
      </div>
      {(name2 || phone2) && (
        <div className="contact-head">
          <span className="contact-name">📌 {name2}</span>
          <a className="contact-phone" href={`tel:${tel2}`}>
            {phone2}
          </a>
        </div>
      )}
      <div className="topics">
        {topics.map((t) => (
          <TopicLink key={t.wa} {...t} />
        ))}
      </div>
    </div>
  );
}

function Department({ name, contacts }) {
  return (
    <section className="dept">
      <div className="dept-head">
        <span className="dept-dot" aria-hidden="true" />
        <h2>{name}</h2>
      </div>
      {contacts.map((c) => (
        <Contact key={c.tel} {...c} />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <header>
        <div className="brand">Directorio Forza</div>
        <h1>Relaciones Laborales</h1>
        <p>
          ¡Hola! 👋 Escríbenos por el tema que necesites y te atenderemos con
          gusto a la brevedad.
        </p>
        <br></br>
        <p>Toca un tema para escribir directo por WhatsApp.</p>
      </header>

      {DEPARTMENTS.map((d) => (
        <Department key={d.name} {...d} />
      ))}

      <footer>Powered by Eddy_dev.</footer>
    </div>
  );
}
