import {setUpWorker} from 'msw'
import {handlers} from './handlers'

export const worker = setUpWorker(...handlers)