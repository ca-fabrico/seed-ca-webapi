#!/usr/bin/env node

// libs
import { Container } from 'inversify';
import { ISeedDescriptor, IBootstrapper } from 'fabrico';

// modules
import { DI_TYPES as SEED_DI_TYPES } from '../lib/bootstrap/di-types';
import { bootstrapper } from '../lib/bootstrap/bootstrapper';
import { CustomSeedGenerator } from '../lib/custom-seed-generator';

export default ({
  bootstrapper: bootstrapper as IBootstrapper,
  customSeedGenerator: (c: Container) => c.get<CustomSeedGenerator>(SEED_DI_TYPES.CANetCoreMicroservicesSeedGenerator)
} as ISeedDescriptor);
