/* eslint-disable @typescript-eslint/no-unused-vars */

import 'twin.macro'

import { css } from 'styled-components'
import {styled} from 'styled-components'

declare module 'twin.macro'{
  const styled: typeof styled;
  const css: typeof css
}