/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { Container } from 'inversify';
import { IBootstrapper } from 'fabrico';

// modules
import { DI_TYPES as SEED_DI_TYPES } from './di-types';
import { CustomSeedGenerator } from '../custom-seed-generator';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<CustomSeedGenerator>(SEED_DI_TYPES.CANetCoreMicroservicesSeedGenerator).to(CustomSeedGenerator).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
