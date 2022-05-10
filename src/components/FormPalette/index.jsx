import P from 'prop-types';
import { useRef } from 'react';
import { FormProvider, useFormContext } from '../../context/FormContext';
import { buildActions } from '../../context/FormContext/build-actions';
import { Button } from '../ButtonSubmit';
import { InputColor } from '../InputColors';
import { SelectionType } from '../SelectionType';
import { Form } from './styles';
import { ErrorSubmit } from '../ErrorSubmit';

export const FormPalette = () => {
  const [state, actions] = useFormContext();
  const { quantityError, typeError, palettes } = state;
  const quantityColors = useRef();
  const paletteType = useRef();

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputColor handleRef={quantityColors} />
      {quantityError && (
        <ErrorSubmit textError={'Coloque a quantidade de cores'} />
      )}
      <SelectionType handleRef={paletteType} />
      {typeError && <ErrorSubmit textError={'Selecione um valor'} />}
      <Button
        text={'Gerar Paleta'}
        handleAsyncFunc={() =>
          actions.asyncCreatePalette({
            quantity: quantityColors.current.value,
            value: paletteType.current.value,
          })
        }
      />
    </Form>
  );
};
