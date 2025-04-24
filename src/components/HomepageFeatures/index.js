import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Inspecciona Elementos',
    Svg: require('@site/static/img/inspeccionar.svg').default,
    description: (
      <>
        Aprende a seleccionar, explorar y analizar cualquier elemento del DOM desde el inspector del navegador.
      </>
    ),
  },
  {
    title: 'Consola de JavaScript',
    Svg: require('@site/static/img/consola.svg').default,
    description: (
      <>
        Usa la consola para probar comandos, depurar errores y explorar objetos en tiempo real.
      </>
    ),
  },
  {
    title: 'Red y Rendimiento',
    Svg: require('@site/static/img/red.svg').default,
    description: (
      <>
        Analiza solicitudes de red, tiempos de carga y optimiza el rendimiento de cualquier sitio web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
