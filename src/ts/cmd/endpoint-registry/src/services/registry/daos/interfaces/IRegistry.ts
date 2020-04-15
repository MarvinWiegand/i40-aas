import {
  ISemanticProtocol,
} from '../postgres/ISemanticProtocol';
import { DeleteResult } from 'typeorm';
import { IAASDescriptor } from './IAASDescriptor';
import { IEndpoint } from './IEndpoint';

interface iRegistry {
  readAASDescriptorByAasId(aasId: string): Promise<IAASDescriptor|undefined>;
  registerAas(req: IAASDescriptor): Promise<IAASDescriptor | undefined>;
  updateAasDescriptorByAasId(req: IAASDescriptor): Promise<IAASDescriptor | undefined>;
  deleteAasDescriptorByAasId(aasId: string): Promise<DeleteResult|undefined>;
  deleteSemanticProtocolById(semanticProtocolId: string): Promise<DeleteResult|undefined>;
  readSemanticProtocolById(semanticProtocolId: string): Promise<DeleteResult|undefined>;
  updateSemanticProtocolById(semanticProtocolId: string): Promise<DeleteResult|undefined>;
  listAllEndpoints(): Promise<Array<IEndpoint>>;
  createSemanticProtocol(req: ISemanticProtocol): void;
  readAASDescriptorsBySemanticProtocolAndRole(
    sProtocol: string,
    role: string
  ): Promise<Array<IAASDescriptor>| undefined>;
}

export { iRegistry };
