import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import List from '../../lists/List';

const References = ({ id, event }) => {
  const path = `${id}.items`;
  const { t } = useTranslation();

  return (
    <section>
      <Heading id={id} />

      <Input
        name="heading"
        label={t('builder.sections.heading')}
        path={`${id}.heading`}
      />

      <List
        path={path}
        event={event}
        titlePath="name"
        subtitlePath="position"
        textPath="summary"
      />
    </section>
  );
};

export default memo(References);
