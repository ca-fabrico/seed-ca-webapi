/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { Container, injectable } from 'inversify';
import { ISeedGenerator } from 'fabrico';

@injectable()
export class CustomSeedGenerator implements ISeedGenerator {

  /**
   * Create a new instance of custom seed generator.
   */
  constructor() {
  }

  bootstrap(container: Container): Promise<void> {
    throw new Error('Method not implemented.');
  }

  initialize(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  prompt(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  preGeneration(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  generate(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  conflicts(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  postGeneration(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  cleanup(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
