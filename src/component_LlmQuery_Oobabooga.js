//@ts-check
import { async_getLlmQueryComponent, extractLlmQueryPayload } from 'omni-utils'; //'omnilib-llms/llmComponent';

import { Llm_Oobabooga, MODEL_PROVIDER} from './llm_Oobabooga.js'


const llm = new Llm_Oobabooga();
const links = {}; // TBD: provide proper links

export async function get_LlmQueryComponent_Oobabooga()
{
    const result = await async_getLlmQueryComponent(MODEL_PROVIDER, links, runProviderPayload, false );
    return result;
}

async function runProviderPayload(payload, ctx) 
{
    const { instruction, prompt, temperature, model_name, args } = extractLlmQueryPayload(payload, MODEL_PROVIDER);
    const response = await llm.query(ctx, prompt, instruction, model_name, temperature, args);
    return response;
}
