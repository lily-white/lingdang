import React from 'react';
import ApiDocs from 'docs/src/modules/components/ApiDocs';
import mapApiTranslations, { parsePropsMarkdown } from 'docs/src/modules/utils/mapApiTranslations';
import jsonPageContent from './card-header.json';

export default function Page({ pageContent }) {
  return <ApiDocs pageContent={pageContent} />;
}

Page.getInitialProps = async () => {
  const req1 = require.context('docs/translations', false, /component-descriptions.*.json$/);
  const req2 = require.context('docs/translations', false, /prop-descriptions.*.json$/);
  const req3 = require.context('docs/translations', false, /class-descriptions.*.json$/);

  const componentDescription = mapApiTranslations(req1, 'CardHeader');
  const propDescriptions = parsePropsMarkdown(mapApiTranslations(req2, 'CardHeader'));
  const classDescriptions = mapApiTranslations(req3, 'CardHeader');

  const pageContent = {
    ...jsonPageContent,
    componentDescription,
    propDescriptions,
    classDescriptions,
  };

  return { pageContent };
};
