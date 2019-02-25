import { Injectable } from '@nestjs/common';

import { ID } from '../../../../shared/shared-types';
import { ConfigService } from '../../config/config.service';

import { IdCodec } from './id-codec';

@Injectable()
export class IdCodecService {
    private idCodec: IdCodec;
    constructor(configService: ConfigService) {
        this.idCodec = new IdCodec(configService.entityIdStrategy);
    }

    encode<T extends string | number | boolean | object | undefined>(target: T, transformKeys?: string[]): T {
        return this.idCodec.encode(target, transformKeys);
    }

    decode<T extends string | number | object | undefined>(target: T, transformKeys?: string[]): T {
        return this.idCodec.decode(target, transformKeys);
    }
}
