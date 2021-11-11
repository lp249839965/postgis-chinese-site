import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '快速入门',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        本中文文档将整理官方文档，形成一份快速入门教程，降低初级使用者入门难度.
      </>
    ),
  },
  {
    title: '图文并用',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        对空间函数以sql执行，以图示说明，降低读者理解难度.
      </>
    ),
  },
  {
    title: '深入研究',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        在理解基础上深入理解PostGIS，掌握常用的优化思路.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
