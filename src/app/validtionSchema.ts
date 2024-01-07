import { z } from 'zod';

export const  creatRusorc=
 z.object({
    name: z.string().min(1, 'Name is required').max(255),
    link: z.string().min(1, 'link is required'),
    description: z.string().min(5, 'Description is required')
});

