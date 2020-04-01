import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import { useTranslation } from 'react-i18next'

import {
  Container,
  Title,
  PhoneFieldView,
} from './RegisterPhoneNumber.styles'

export default function RegisterPhoneNumber() {
  const { t } = useTranslation()
  return (
    <Container>
      <Title variant="h4" gutterBottom>{t('Celular para contato')}</Title>
      <PhoneFieldView>
        <TextField
          label={t('Número:')}
          variant="outlined"
          type="number"
          placeholder="(51) 99999-9999"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </PhoneFieldView>
    </Container>
  )
}

RegisterPhoneNumber.propTypes = {}
